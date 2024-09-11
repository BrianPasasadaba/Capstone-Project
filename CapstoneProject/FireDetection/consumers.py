import cv2
import json
import base64
from channels.generic.websocket import WebsocketConsumer
from ultralytics import YOLO
from threading import Thread

model_path = 'models/yolov8.pt'
model = YOLO(model_path)

class DetectionConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.thread = Thread(target=self.detect_objects)
        self.thread.start()

    def disconnect(self, close_code):
        self.thread.join()

    def detect_objects(self):
        cap = cv2.VideoCapture(0)
        
        while cap.isOpened():
            ret, frame = cap.read()
            if ret:
                # Perform object detection
                results = model(frame)
                boxes = []

                for result in results:
                    for box in result.boxes:
                        # Extract box coordinates and other attributes
                        xmin, ymin, xmax, ymax = box.xyxy[0]  # Assuming box.xyxy gives you the coordinates
                        confidence = box.conf[0]  # Assuming box.conf gives you the confidence score
                        class_id = box.cls[0]  # Assuming box.cls gives you the class ID
                        
                        new_box = {
                            'xmin': int(xmin.item()),  # Convert to integer
                            'ymin': int(ymin.item()),  # Convert to integer
                            'xmax': int(xmax.item()),  # Convert to integer
                            'ymax': int(ymax.item()),  # Convert to integer
                            'confidence': float(confidence.item()),  # Convert to float
                            'class': int(class_id.item()),  # Convert to integer
                            'label': model.names[int(class_id.item())]  # Get the class label
                        }
                        boxes.append(new_box)

                # Encode frame as JPEG
                _, buffer = cv2.imencode('.jpg', frame)
                frame_data = base64.b64encode(buffer).decode('utf-8')
                
                self.send(text_data=json.dumps({
                    'image': frame_data,
                    'boxes': boxes
                }))
            
            cv2.waitKey(1)

        cap.release()
            

