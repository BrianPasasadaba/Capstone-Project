PGDMP  !    -            	    |            Bfp    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    25653    Bfp    DATABASE     ~   CREATE DATABASE "Bfp" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Philippines.1252';
    DROP DATABASE "Bfp";
                postgres    false            �            1259    25725    FireDetection_customuser    TABLE     I  CREATE TABLE public."FireDetection_customuser" (
    id bigint NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    email character varying(100) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    is_active boolean NOT NULL,
    is_staff boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL,
    date_of_birth date,
    name character varying(100) NOT NULL,
    role character varying(30) NOT NULL,
    verified boolean NOT NULL
);
 .   DROP TABLE public."FireDetection_customuser";
       public         heap    postgres    false            �            1259    25724    FireDetection_customuser_id_seq    SEQUENCE     �   ALTER TABLE public."FireDetection_customuser" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."FireDetection_customuser_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    228            �          0    25725    FireDetection_customuser 
   TABLE DATA           �   COPY public."FireDetection_customuser" (id, password, last_login, is_superuser, email, first_name, last_name, is_active, is_staff, date_joined, date_of_birth, name, role, verified) FROM stdin;
    public          postgres    false    228   �       �           0    0    FireDetection_customuser_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."FireDetection_customuser_id_seq"', 18, true);
          public          postgres    false    227            B           2606    34043 ;   FireDetection_customuser FireDetection_customuser_email_key 
   CONSTRAINT     {   ALTER TABLE ONLY public."FireDetection_customuser"
    ADD CONSTRAINT "FireDetection_customuser_email_key" UNIQUE (email);
 i   ALTER TABLE ONLY public."FireDetection_customuser" DROP CONSTRAINT "FireDetection_customuser_email_key";
       public            postgres    false    228            D           2606    25729 6   FireDetection_customuser FireDetection_customuser_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."FireDetection_customuser"
    ADD CONSTRAINT "FireDetection_customuser_pkey" PRIMARY KEY (id);
 d   ALTER TABLE ONLY public."FireDetection_customuser" DROP CONSTRAINT "FireDetection_customuser_pkey";
       public            postgres    false    228            @           1259    34044 ,   FireDetection_customuser_email_248a39c8_like    INDEX     �   CREATE INDEX "FireDetection_customuser_email_248a39c8_like" ON public."FireDetection_customuser" USING btree (email varchar_pattern_ops);
 B   DROP INDEX public."FireDetection_customuser_email_248a39c8_like";
       public            postgres    false    228            �   <  x���Y��0 �g�+���j����JI�IB��T�kC8c ��%M�JQZ���5�o<��L��~��{E��h럃`�e3�&���\�b�#�q��;#�H�f3���v�����+�ɤ���'�_M���ʃW�����ü %��LŸaQ�E@���3%Q�yy�0�E���� I
��~,��I�3U�G��u���
e�"�R�8��T��H�JoZ/�+�#�7�MZ�6Ŵ����8͜�k���S��?�P�
�0R�ݨшd]�����K������x���FHh�.���d=d���_���'y��,�bߛ�ˇ��4���ۏ/�n>��$�
'��;� 4��d^TvG9�A��d�+>gK�:E����o40C��,��Uo���EZ��-�h#Oz�Ԩ��|��l������ �ϔ9^Pd����5dQ���P�9�
���
xbN�P�{a����?Ã�WD�Sǩ�����v�l��7��dcw�.�����T�����hϕT���:d-G�b��ވ[>���]}�r TQ� �����j����t:? ��     