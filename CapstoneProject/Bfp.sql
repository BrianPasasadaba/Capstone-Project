PGDMP      )        	        |            Bfp    16.4    16.4 V    ,           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            -           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            .           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            /           1262    25653    Bfp    DATABASE     ~   CREATE DATABASE "Bfp" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Philippines.1252';
    DROP DATABASE "Bfp";
                postgres    false            �            1259    25725    FireDetection_customuser    TABLE     I  CREATE TABLE public."FireDetection_customuser" (
    id bigint NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    email character varying(254) NOT NULL,
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
       public         heap    postgres    false            �            1259    25733    FireDetection_customuser_groups    TABLE     �   CREATE TABLE public."FireDetection_customuser_groups" (
    id bigint NOT NULL,
    customuser_id bigint NOT NULL,
    group_id integer NOT NULL
);
 5   DROP TABLE public."FireDetection_customuser_groups";
       public         heap    postgres    false            �            1259    25732 &   FireDetection_customuser_groups_id_seq    SEQUENCE       ALTER TABLE public."FireDetection_customuser_groups" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."FireDetection_customuser_groups_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    230            �            1259    25724    FireDetection_customuser_id_seq    SEQUENCE     �   ALTER TABLE public."FireDetection_customuser" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."FireDetection_customuser_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    228            �            1259    25739 )   FireDetection_customuser_user_permissions    TABLE     �   CREATE TABLE public."FireDetection_customuser_user_permissions" (
    id bigint NOT NULL,
    customuser_id bigint NOT NULL,
    permission_id integer NOT NULL
);
 ?   DROP TABLE public."FireDetection_customuser_user_permissions";
       public         heap    postgres    false            �            1259    25738 0   FireDetection_customuser_user_permissions_id_seq    SEQUENCE       ALTER TABLE public."FireDetection_customuser_user_permissions" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."FireDetection_customuser_user_permissions_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    232            �            1259    25717    FireDetection_initialreport    TABLE     �  CREATE TABLE public."FireDetection_initialreport" (
    id bigint NOT NULL,
    "where" character varying(255) NOT NULL,
    date date NOT NULL,
    "time" timestamp with time zone NOT NULL,
    time_of_fire_out timestamp with time zone NOT NULL,
    occupancy_type character varying(255) NOT NULL,
    name_of_owner character varying(255) NOT NULL,
    alarm_status character varying(255) NOT NULL,
    no_of_respondents integer NOT NULL,
    estimated_damage character varying(255) NOT NULL,
    no_of_establishments integer NOT NULL,
    no_of_casualties integer NOT NULL,
    no_of_injured integer NOT NULL,
    proof character varying(100)
);
 1   DROP TABLE public."FireDetection_initialreport";
       public         heap    postgres    false            �            1259    25716 "   FireDetection_initialreport_id_seq    SEQUENCE     �   ALTER TABLE public."FireDetection_initialreport" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."FireDetection_initialreport_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    226            �            1259    25677 
   auth_group    TABLE     f   CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);
    DROP TABLE public.auth_group;
       public         heap    postgres    false            �            1259    25676    auth_group_id_seq    SEQUENCE     �   ALTER TABLE public.auth_group ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    222            �            1259    25685    auth_group_permissions    TABLE     �   CREATE TABLE public.auth_group_permissions (
    id bigint NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);
 *   DROP TABLE public.auth_group_permissions;
       public         heap    postgres    false            �            1259    25684    auth_group_permissions_id_seq    SEQUENCE     �   ALTER TABLE public.auth_group_permissions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    224            �            1259    25671    auth_permission    TABLE     �   CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);
 #   DROP TABLE public.auth_permission;
       public         heap    postgres    false            �            1259    25670    auth_permission_id_seq    SEQUENCE     �   ALTER TABLE public.auth_permission ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    220            �            1259    25784    django_admin_log    TABLE     �  CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id bigint NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);
 $   DROP TABLE public.django_admin_log;
       public         heap    postgres    false            �            1259    25783    django_admin_log_id_seq    SEQUENCE     �   ALTER TABLE public.django_admin_log ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    234            �            1259    25663    django_content_type    TABLE     �   CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);
 '   DROP TABLE public.django_content_type;
       public         heap    postgres    false            �            1259    25662    django_content_type_id_seq    SEQUENCE     �   ALTER TABLE public.django_content_type ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �            1259    25655    django_migrations    TABLE     �   CREATE TABLE public.django_migrations (
    id bigint NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);
 %   DROP TABLE public.django_migrations;
       public         heap    postgres    false            �            1259    25654    django_migrations_id_seq    SEQUENCE     �   ALTER TABLE public.django_migrations ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �            1259    25804    django_session    TABLE     �   CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);
 "   DROP TABLE public.django_session;
       public         heap    postgres    false            "          0    25725    FireDetection_customuser 
   TABLE DATA           �   COPY public."FireDetection_customuser" (id, password, last_login, is_superuser, email, first_name, last_name, is_active, is_staff, date_joined, date_of_birth, name, role, verified) FROM stdin;
    public          postgres    false    228   7       $          0    25733    FireDetection_customuser_groups 
   TABLE DATA           X   COPY public."FireDetection_customuser_groups" (id, customuser_id, group_id) FROM stdin;
    public          postgres    false    230   ̀       &          0    25739 )   FireDetection_customuser_user_permissions 
   TABLE DATA           g   COPY public."FireDetection_customuser_user_permissions" (id, customuser_id, permission_id) FROM stdin;
    public          postgres    false    232   �                  0    25717    FireDetection_initialreport 
   TABLE DATA           �   COPY public."FireDetection_initialreport" (id, "where", date, "time", time_of_fire_out, occupancy_type, name_of_owner, alarm_status, no_of_respondents, estimated_damage, no_of_establishments, no_of_casualties, no_of_injured, proof) FROM stdin;
    public          postgres    false    226   �                 0    25677 
   auth_group 
   TABLE DATA           .   COPY public.auth_group (id, name) FROM stdin;
    public          postgres    false    222   ��                 0    25685    auth_group_permissions 
   TABLE DATA           M   COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
    public          postgres    false    224   ��                 0    25671    auth_permission 
   TABLE DATA           N   COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
    public          postgres    false    220   Ɂ       (          0    25784    django_admin_log 
   TABLE DATA           �   COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
    public          postgres    false    234   �                 0    25663    django_content_type 
   TABLE DATA           C   COPY public.django_content_type (id, app_label, model) FROM stdin;
    public          postgres    false    218   ��                 0    25655    django_migrations 
   TABLE DATA           C   COPY public.django_migrations (id, app, name, applied) FROM stdin;
    public          postgres    false    216   4�       )          0    25804    django_session 
   TABLE DATA           P   COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
    public          postgres    false    235   7�       0           0    0 &   FireDetection_customuser_groups_id_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public."FireDetection_customuser_groups_id_seq"', 1, false);
          public          postgres    false    229            1           0    0    FireDetection_customuser_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."FireDetection_customuser_id_seq"', 6, true);
          public          postgres    false    227            2           0    0 0   FireDetection_customuser_user_permissions_id_seq    SEQUENCE SET     a   SELECT pg_catalog.setval('public."FireDetection_customuser_user_permissions_id_seq"', 1, false);
          public          postgres    false    231            3           0    0 "   FireDetection_initialreport_id_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public."FireDetection_initialreport_id_seq"', 2, true);
          public          postgres    false    225            4           0    0    auth_group_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);
          public          postgres    false    221            5           0    0    auth_group_permissions_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);
          public          postgres    false    223            6           0    0    auth_permission_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.auth_permission_id_seq', 28, true);
          public          postgres    false    219            7           0    0    django_admin_log_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.django_admin_log_id_seq', 2, true);
          public          postgres    false    233            8           0    0    django_content_type_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.django_content_type_id_seq', 7, true);
          public          postgres    false    217            9           0    0    django_migrations_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.django_migrations_id_seq', 21, true);
          public          postgres    false    215            j           2606    25746 ]   FireDetection_customuser_groups FireDetection_customuser_customuser_id_group_id_24c6b4f4_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public."FireDetection_customuser_groups"
    ADD CONSTRAINT "FireDetection_customuser_customuser_id_group_id_24c6b4f4_uniq" UNIQUE (customuser_id, group_id);
 �   ALTER TABLE ONLY public."FireDetection_customuser_groups" DROP CONSTRAINT "FireDetection_customuser_customuser_id_group_id_24c6b4f4_uniq";
       public            postgres    false    230    230            p           2606    25760 i   FireDetection_customuser_user_permissions FireDetection_customuser_customuser_id_permission_03cf49b7_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public."FireDetection_customuser_user_permissions"
    ADD CONSTRAINT "FireDetection_customuser_customuser_id_permission_03cf49b7_uniq" UNIQUE (customuser_id, permission_id);
 �   ALTER TABLE ONLY public."FireDetection_customuser_user_permissions" DROP CONSTRAINT "FireDetection_customuser_customuser_id_permission_03cf49b7_uniq";
       public            postgres    false    232    232            f           2606    25775 ;   FireDetection_customuser FireDetection_customuser_email_key 
   CONSTRAINT     {   ALTER TABLE ONLY public."FireDetection_customuser"
    ADD CONSTRAINT "FireDetection_customuser_email_key" UNIQUE (email);
 i   ALTER TABLE ONLY public."FireDetection_customuser" DROP CONSTRAINT "FireDetection_customuser_email_key";
       public            postgres    false    228            n           2606    25737 D   FireDetection_customuser_groups FireDetection_customuser_groups_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."FireDetection_customuser_groups"
    ADD CONSTRAINT "FireDetection_customuser_groups_pkey" PRIMARY KEY (id);
 r   ALTER TABLE ONLY public."FireDetection_customuser_groups" DROP CONSTRAINT "FireDetection_customuser_groups_pkey";
       public            postgres    false    230            h           2606    25729 6   FireDetection_customuser FireDetection_customuser_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."FireDetection_customuser"
    ADD CONSTRAINT "FireDetection_customuser_pkey" PRIMARY KEY (id);
 d   ALTER TABLE ONLY public."FireDetection_customuser" DROP CONSTRAINT "FireDetection_customuser_pkey";
       public            postgres    false    228            t           2606    25743 X   FireDetection_customuser_user_permissions FireDetection_customuser_user_permissions_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."FireDetection_customuser_user_permissions"
    ADD CONSTRAINT "FireDetection_customuser_user_permissions_pkey" PRIMARY KEY (id);
 �   ALTER TABLE ONLY public."FireDetection_customuser_user_permissions" DROP CONSTRAINT "FireDetection_customuser_user_permissions_pkey";
       public            postgres    false    232            c           2606    25723 <   FireDetection_initialreport FireDetection_initialreport_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public."FireDetection_initialreport"
    ADD CONSTRAINT "FireDetection_initialreport_pkey" PRIMARY KEY (id);
 j   ALTER TABLE ONLY public."FireDetection_initialreport" DROP CONSTRAINT "FireDetection_initialreport_pkey";
       public            postgres    false    226            Y           2606    25714    auth_group auth_group_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.auth_group DROP CONSTRAINT auth_group_name_key;
       public            postgres    false    222            ^           2606    25700 R   auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);
 |   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq;
       public            postgres    false    224    224            a           2606    25689 2   auth_group_permissions auth_group_permissions_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_pkey;
       public            postgres    false    224            [           2606    25681    auth_group auth_group_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.auth_group DROP CONSTRAINT auth_group_pkey;
       public            postgres    false    222            T           2606    25691 F   auth_permission auth_permission_content_type_id_codename_01ab375a_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);
 p   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq;
       public            postgres    false    220    220            V           2606    25675 $   auth_permission auth_permission_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_pkey;
       public            postgres    false    220            w           2606    25791 &   django_admin_log django_admin_log_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT django_admin_log_pkey;
       public            postgres    false    234            O           2606    25669 E   django_content_type django_content_type_app_label_model_76bd3d3b_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);
 o   ALTER TABLE ONLY public.django_content_type DROP CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq;
       public            postgres    false    218    218            Q           2606    25667 ,   django_content_type django_content_type_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.django_content_type DROP CONSTRAINT django_content_type_pkey;
       public            postgres    false    218            M           2606    25661 (   django_migrations django_migrations_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.django_migrations DROP CONSTRAINT django_migrations_pkey;
       public            postgres    false    216            {           2606    25810 "   django_session django_session_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);
 L   ALTER TABLE ONLY public.django_session DROP CONSTRAINT django_session_pkey;
       public            postgres    false    235            d           1259    25776 ,   FireDetection_customuser_email_248a39c8_like    INDEX     �   CREATE INDEX "FireDetection_customuser_email_248a39c8_like" ON public."FireDetection_customuser" USING btree (email varchar_pattern_ops);
 B   DROP INDEX public."FireDetection_customuser_email_248a39c8_like";
       public            postgres    false    228            k           1259    25757 6   FireDetection_customuser_groups_customuser_id_139417c4    INDEX     �   CREATE INDEX "FireDetection_customuser_groups_customuser_id_139417c4" ON public."FireDetection_customuser_groups" USING btree (customuser_id);
 L   DROP INDEX public."FireDetection_customuser_groups_customuser_id_139417c4";
       public            postgres    false    230            l           1259    25758 1   FireDetection_customuser_groups_group_id_e73d40b9    INDEX     �   CREATE INDEX "FireDetection_customuser_groups_group_id_e73d40b9" ON public."FireDetection_customuser_groups" USING btree (group_id);
 G   DROP INDEX public."FireDetection_customuser_groups_group_id_e73d40b9";
       public            postgres    false    230            q           1259    25771 1   FireDetection_customuser_u_customuser_id_05cbedd1    INDEX     �   CREATE INDEX "FireDetection_customuser_u_customuser_id_05cbedd1" ON public."FireDetection_customuser_user_permissions" USING btree (customuser_id);
 G   DROP INDEX public."FireDetection_customuser_u_customuser_id_05cbedd1";
       public            postgres    false    232            r           1259    25772 1   FireDetection_customuser_u_permission_id_cba79b9e    INDEX     �   CREATE INDEX "FireDetection_customuser_u_permission_id_cba79b9e" ON public."FireDetection_customuser_user_permissions" USING btree (permission_id);
 G   DROP INDEX public."FireDetection_customuser_u_permission_id_cba79b9e";
       public            postgres    false    232            W           1259    25715    auth_group_name_a6ea08ec_like    INDEX     h   CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);
 1   DROP INDEX public.auth_group_name_a6ea08ec_like;
       public            postgres    false    222            \           1259    25711 (   auth_group_permissions_group_id_b120cbf9    INDEX     o   CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);
 <   DROP INDEX public.auth_group_permissions_group_id_b120cbf9;
       public            postgres    false    224            _           1259    25712 -   auth_group_permissions_permission_id_84c5c92e    INDEX     y   CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);
 A   DROP INDEX public.auth_group_permissions_permission_id_84c5c92e;
       public            postgres    false    224            R           1259    25697 (   auth_permission_content_type_id_2f476e4b    INDEX     o   CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);
 <   DROP INDEX public.auth_permission_content_type_id_2f476e4b;
       public            postgres    false    220            u           1259    25802 )   django_admin_log_content_type_id_c4bce8eb    INDEX     q   CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);
 =   DROP INDEX public.django_admin_log_content_type_id_c4bce8eb;
       public            postgres    false    234            x           1259    25803 !   django_admin_log_user_id_c564eba6    INDEX     a   CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);
 5   DROP INDEX public.django_admin_log_user_id_c564eba6;
       public            postgres    false    234            y           1259    25812 #   django_session_expire_date_a5c62663    INDEX     e   CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);
 7   DROP INDEX public.django_session_expire_date_a5c62663;
       public            postgres    false    235            |           1259    25811 (   django_session_session_key_c0390e0f_like    INDEX     ~   CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);
 <   DROP INDEX public.django_session_session_key_c0390e0f_like;
       public            postgres    false    235            �           2606    25761 b   FireDetection_customuser_user_permissions FireDetection_custom_customuser_id_05cbedd1_fk_FireDetec    FK CONSTRAINT     �   ALTER TABLE ONLY public."FireDetection_customuser_user_permissions"
    ADD CONSTRAINT "FireDetection_custom_customuser_id_05cbedd1_fk_FireDetec" FOREIGN KEY (customuser_id) REFERENCES public."FireDetection_customuser"(id) DEFERRABLE INITIALLY DEFERRED;
 �   ALTER TABLE ONLY public."FireDetection_customuser_user_permissions" DROP CONSTRAINT "FireDetection_custom_customuser_id_05cbedd1_fk_FireDetec";
       public          postgres    false    228    232    4712            �           2606    25747 X   FireDetection_customuser_groups FireDetection_custom_customuser_id_139417c4_fk_FireDetec    FK CONSTRAINT     �   ALTER TABLE ONLY public."FireDetection_customuser_groups"
    ADD CONSTRAINT "FireDetection_custom_customuser_id_139417c4_fk_FireDetec" FOREIGN KEY (customuser_id) REFERENCES public."FireDetection_customuser"(id) DEFERRABLE INITIALLY DEFERRED;
 �   ALTER TABLE ONLY public."FireDetection_customuser_groups" DROP CONSTRAINT "FireDetection_custom_customuser_id_139417c4_fk_FireDetec";
       public          postgres    false    228    230    4712            �           2606    25752 S   FireDetection_customuser_groups FireDetection_custom_group_id_e73d40b9_fk_auth_grou    FK CONSTRAINT     �   ALTER TABLE ONLY public."FireDetection_customuser_groups"
    ADD CONSTRAINT "FireDetection_custom_group_id_e73d40b9_fk_auth_grou" FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;
 �   ALTER TABLE ONLY public."FireDetection_customuser_groups" DROP CONSTRAINT "FireDetection_custom_group_id_e73d40b9_fk_auth_grou";
       public          postgres    false    230    4699    222            �           2606    25766 b   FireDetection_customuser_user_permissions FireDetection_custom_permission_id_cba79b9e_fk_auth_perm    FK CONSTRAINT     �   ALTER TABLE ONLY public."FireDetection_customuser_user_permissions"
    ADD CONSTRAINT "FireDetection_custom_permission_id_cba79b9e_fk_auth_perm" FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;
 �   ALTER TABLE ONLY public."FireDetection_customuser_user_permissions" DROP CONSTRAINT "FireDetection_custom_permission_id_cba79b9e_fk_auth_perm";
       public          postgres    false    232    4694    220            ~           2606    25706 O   auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;
 y   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm;
       public          postgres    false    224    4694    220                       2606    25701 P   auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;
 z   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id;
       public          postgres    false    4699    222    224            }           2606    25692 E   auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;
 o   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co;
       public          postgres    false    4689    220    218            �           2606    25792 G   django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co    FK CONSTRAINT     �   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;
 q   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co;
       public          postgres    false    218    4689    234            �           2606    25797 ?   django_admin_log django_admin_log_user_id_c564eba6_fk_FireDetec    FK CONSTRAINT     �   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT "django_admin_log_user_id_c564eba6_fk_FireDetec" FOREIGN KEY (user_id) REFERENCES public."FireDetection_customuser"(id) DEFERRABLE INITIALLY DEFERRED;
 k   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT "django_admin_log_user_id_c564eba6_fk_FireDetec";
       public          postgres    false    4712    234    228            "   �  x�}�]��@@��_����w>fH6)���V�U��M�E@������n����I&��=9'C�~�#�����0�>�*#��\���W���o/��A��腧�_�厰%�����y�ݳ�x�Oz��pv����~C:*��̓$C��� a_@���E�\�I�� ��f#+�'{#(jqt�7E~ƤŘN� l|�TQ��oiuzg�InG��q�)/���=��q��
���B<��x"�}ՙ���~
�a�/\��l8npq>|2b�&� e#��{�!��=Ģ��1����o���MG�[*YΗY靊l5Ӧ��mWⰚ�>���g�]�ʎJ\�u�s_�/4a��~�9����0i#Q� �u�^���S &���z���Sg��      $      x������ � �      &      x������ � �          y   x�3�t*J�T��O�4202�5�"$������������.aCΠ��̜| È�� �4���ee��e�e�q!,,�m��)��0�R�J�	X��YaPTq@� 6:�            x������ � �            x������ � �         <  x�e�]n�0�����`j�l�w�I*�DA������1�HAm�g;fm�e��gv��[����3u��ӎ��, vv�^�sD����`ǀP�f��ܺ�iT9��@�<N@�c��}�b �wJ�{��~��Y��������� �)% ���E,xN���]�߳U%���hS�c��oK<&
_Sh��W�&V��|��I�;�%���=x#1�,�Q!����"7:��![�<-^���s�s��X���q�����*�Пxښm��j�����ut.M����]A�9clM����ׇ���U��      (   �   x�U̱� @�����)y�d�X"�ҠI����5���N��@Q��)U(���V����i1��㙓��qr!�>M��ݨ�~��V۾w����L[%jl�Ǔ_�P
^�����0�-��-]\ί�z���+#��h8.O         q   x�]�K
ADש��/ ��M���t�$����A�]�zU{*S��f��*#��ٛD�)��fv'���Ms���3����]�o�\sc���8w�����im;; /�/6�         �  x���ݪ� ��ӧ����?��z��8 ��!�9j��ۏ��fHJ%���k��Uk������B�L0��0��7���F&��a���wxU��ӽ�h9�t"��m�@���"�����ˁC4U�R���vrԮ7�;�e�~d��s��&JDT�P��Ȍ�||�^��#B	O��P蒒�;�� :��[":����DaS�mƔ�M����4�'��8�d��	���$�(�fn�:sT�:/��(�s��^{����,i�_@�7�y�1��<t�B+��B1�H���4���N�{��`Jr�4F�����.������A�2४�q�����b��8�?:�6Ļ_�� DN���{C���s[1�I���WCLCJ�p��u�KOi���4cޏ�y�G�k�n5�Q��R�X����m�)����y@R�UV.O�:��˚�I���Ũ�z��K!ױ�\k����<�Ż�������Vq����������v� (�      )      x������ � �     