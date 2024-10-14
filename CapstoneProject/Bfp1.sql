--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

-- Started on 2024-10-04 20:07:44

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 228 (class 1259 OID 25725)
-- Name: FireDetection_customuser; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."FireDetection_customuser" (
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


ALTER TABLE public."FireDetection_customuser" OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 25733)
-- Name: FireDetection_customuser_groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."FireDetection_customuser_groups" (
    id bigint NOT NULL,
    customuser_id bigint NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public."FireDetection_customuser_groups" OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 25732)
-- Name: FireDetection_customuser_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."FireDetection_customuser_groups" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."FireDetection_customuser_groups_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 227 (class 1259 OID 25724)
-- Name: FireDetection_customuser_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."FireDetection_customuser" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."FireDetection_customuser_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 232 (class 1259 OID 25739)
-- Name: FireDetection_customuser_user_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."FireDetection_customuser_user_permissions" (
    id bigint NOT NULL,
    customuser_id bigint NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public."FireDetection_customuser_user_permissions" OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 25738)
-- Name: FireDetection_customuser_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."FireDetection_customuser_user_permissions" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."FireDetection_customuser_user_permissions_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 226 (class 1259 OID 25717)
-- Name: FireDetection_initialreport; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."FireDetection_initialreport" (
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
    proof character varying(100),
    resolved boolean NOT NULL
);


ALTER TABLE public."FireDetection_initialreport" OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 25716)
-- Name: FireDetection_initialreport_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."FireDetection_initialreport" ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."FireDetection_initialreport_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 25677)
-- Name: auth_group; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 25676)
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.auth_group ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 25685)
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_group_permissions (
    id bigint NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 25684)
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.auth_group_permissions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 25671)
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 25670)
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.auth_permission ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 234 (class 1259 OID 25784)
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_admin_log (
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


ALTER TABLE public.django_admin_log OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 25783)
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.django_admin_log ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 25663)
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 25662)
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.django_content_type ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 25655)
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_migrations (
    id bigint NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 25654)
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.django_migrations ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 235 (class 1259 OID 25804)
-- Name: django_session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO postgres;

--
-- TOC entry 4898 (class 0 OID 25725)
-- Dependencies: 228
-- Data for Name: FireDetection_customuser; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."FireDetection_customuser" (id, password, last_login, is_superuser, email, first_name, last_name, is_active, is_staff, date_joined, date_of_birth, name, role, verified) FROM stdin;
1	pbkdf2_sha256$870000$CjLDFtn9tSVlGVJsot0AnR$P0n2AAu8qWSMqQ6AgbXD+uxlrn8zhb+B/ujZ3i4SEpc=	2024-10-03 07:34:43.257234+08	t	admin@gmail.com			t	t	2024-09-09 02:33:00.302723+08	\N	Ronilo Rejuso	role1	t
12	pbkdf2_sha256$870000$sAOXz29PY9J37nWp4IK2To$w6lgSuD6jYWBVP1k99gmVE/fri5SZ1n1mwOvik6KWdk=	2024-10-03 07:35:06.049175+08	f	ronilorejuso21@gmail.com			t	f	2024-10-03 07:01:26.922948+08	\N	ronilo rejuso	role1	t
\.


--
-- TOC entry 4900 (class 0 OID 25733)
-- Dependencies: 230
-- Data for Name: FireDetection_customuser_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."FireDetection_customuser_groups" (id, customuser_id, group_id) FROM stdin;
\.


--
-- TOC entry 4902 (class 0 OID 25739)
-- Dependencies: 232
-- Data for Name: FireDetection_customuser_user_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."FireDetection_customuser_user_permissions" (id, customuser_id, permission_id) FROM stdin;
\.


--
-- TOC entry 4896 (class 0 OID 25717)
-- Dependencies: 226
-- Data for Name: FireDetection_initialreport; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."FireDetection_initialreport" (id, "where", date, "time", time_of_fire_out, occupancy_type, name_of_owner, alarm_status, no_of_respondents, estimated_damage, no_of_establishments, no_of_casualties, no_of_injured, proof, resolved) FROM stdin;
5	Brgy Metroville	2024-09-26	2024-09-26 16:09:00+08	2024-09-26 16:09:00+08	1	Ronilo	1	4	10000	4	3	3	proofs/71upipjs.png	f
6	Brgy Metroville	2024-09-26	2024-09-26 16:26:00+08	2024-09-26 16:23:00+08	1	Ronilo Rejuso	3	2	10000	3	3	2	proofs/Firing.jfif	f
7	Brgy Pooc	2024-09-09	2024-09-09 11:39:00+08	2024-09-09 11:39:00+08	1	Ronilo	1	2	10000	2	2	2		f
8	Brgy Metrovilles	2024-09-27	2024-09-27 18:12:00+08	2024-09-27 18:12:00+08	1	Ronilo	2	3	10000	3	3	2	proofs/Firing.jfif	f
1	Brgy Pooc	2024-09-09	2024-09-09 11:39:00+08	2024-09-09 11:39:00+08	1	Ronilo	1	2	10000	2	2	2	proofs/Firing.jfif	t
2	Brgy Poocs	2024-09-09	2024-09-09 11:55:00+08	2024-09-09 12:55:00+08	1	Ronilo Rejuso	1	2	10000	2	2	2	proofs/Firing_iix3Prt.jfif	t
3	Brgy Metroville	2024-09-26	2024-09-26 10:39:00+08	2024-09-26 10:42:00+08	1	Ronilo	1	3	10000	4	4	3	proofs/Firing_J7Olkvu.jfif	t
13	Brgy Poocssssss	2024-09-27	2024-09-27 19:08:00+08	2024-09-27 19:03:00+08	2	Ronilo	1	2	10000	3	2	2	proofs/Firing_SCs4u2A.jfif	t
12	Brgy Poocssssss	2024-09-27	2024-09-27 19:02:00+08	2024-09-27 19:02:00+08	2	Ronilo	1	2	10000	2	2	2	proofs/Screenshot_2024-07-19_230852.png	t
4	Brgy Metroville	2024-09-27	2024-09-27 15:54:00+08	2024-09-27 15:55:00+08	2	Ronilo Rejuso	2	2	10000	2	4	4	proofs/71upipjs.png	t
11	Brgy Metrovilles	2024-09-27	2024-09-27 19:01:00+08	2024-09-27 19:01:00+08	2	Ronilo Rejuso	2	2	10000	5	2	3	proofs/57f075d2-efdd-4b31-917b-2eab96550e23.jpg	t
10		2024-09-27	2024-09-27 18:49:00+08	2024-09-27 18:49:00+08	3	Ronilo	1	2	10000	2	2	2	proofs/OIP_1.jfif	t
9	Brgy Metrovilles	2024-09-27	2024-09-27 18:41:00+08	2024-09-27 18:41:00+08	2	Ronilo	1	2	10000	2	3	4	proofs/Firing.jfif	t
\.


--
-- TOC entry 4892 (class 0 OID 25677)
-- Dependencies: 222
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- TOC entry 4894 (class 0 OID 25685)
-- Dependencies: 224
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- TOC entry 4890 (class 0 OID 25671)
-- Dependencies: 220
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add content type	4	add_contenttype
14	Can change content type	4	change_contenttype
15	Can delete content type	4	delete_contenttype
16	Can view content type	4	view_contenttype
17	Can add session	5	add_session
18	Can change session	5	change_session
19	Can delete session	5	delete_session
20	Can view session	5	view_session
21	Can add initial report	6	add_initialreport
22	Can change initial report	6	change_initialreport
23	Can delete initial report	6	delete_initialreport
24	Can view initial report	6	view_initialreport
25	Can add user	7	add_customuser
26	Can change user	7	change_customuser
27	Can delete user	7	delete_customuser
28	Can view user	7	view_customuser
\.


--
-- TOC entry 4904 (class 0 OID 25784)
-- Dependencies: 234
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2024-09-09 02:33:45.88075+08	2	ronilorejuso21@gmail.com	1	[{"added": {}}]	7	1
2	2024-09-09 03:47:53.07091+08	3	roni@gmail	2	[{"changed": {"fields": ["password"]}}]	7	1
3	2024-09-11 19:30:40.942501+08	1	admin@gmail.com	2	[{"changed": {"fields": ["Name"]}}]	7	1
4	2024-09-11 19:30:51.917441+08	2	ronilorejuso21@gmail.com	2	[{"changed": {"fields": ["Name"]}}]	7	1
5	2024-09-29 05:49:25.251165+08	1	admin@gmail.com	2	[{"changed": {"fields": ["Verified"]}}]	7	1
6	2024-10-03 06:17:36.800296+08	2	ronilorejuso21@gmail.com	2	[]	7	1
7	2024-10-03 06:17:50.862038+08	2	ronilorejuso21@gmail.com	3		7	1
8	2024-10-03 06:19:53.241465+08	9	ronilorejuso21@gmail.com	3		7	1
9	2024-10-03 07:00:50.652473+08	11	ronilorejuso21@gmail.com	2	[]	7	1
10	2024-10-03 07:01:01.526752+08	11	ronilorejuso21@gmail.com	2	[]	7	1
11	2024-10-03 07:01:08.903713+08	11	ronilorejuso21@gmail.com	3		7	1
12	2024-10-03 07:29:54.351022+08	7	juandelaxrux@gmail.com	3		7	1
13	2024-10-03 07:29:54.351022+08	3	roni@gmail	3		7	1
14	2024-10-03 07:29:54.351022+08	6	roni@gmail.com	3		7	1
\.


--
-- TOC entry 4888 (class 0 OID 25663)
-- Dependencies: 218
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	contenttypes	contenttype
5	sessions	session
6	FireDetection	initialreport
7	FireDetection	customuser
\.


--
-- TOC entry 4886 (class 0 OID 25655)
-- Dependencies: 216
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2024-09-09 02:20:59.075233+08
2	contenttypes	0002_remove_content_type_name	2024-09-09 02:20:59.090259+08
3	auth	0001_initial	2024-09-09 02:20:59.181714+08
4	auth	0002_alter_permission_name_max_length	2024-09-09 02:20:59.191716+08
5	auth	0003_alter_user_email_max_length	2024-09-09 02:20:59.203438+08
6	auth	0004_alter_user_username_opts	2024-09-09 02:20:59.214259+08
7	auth	0005_alter_user_last_login_null	2024-09-09 02:20:59.224467+08
8	auth	0006_require_contenttypes_0002	2024-09-09 02:20:59.227425+08
9	auth	0007_alter_validators_add_error_messages	2024-09-09 02:20:59.237426+08
10	auth	0008_alter_user_username_max_length	2024-09-09 02:20:59.247424+08
11	auth	0009_alter_user_last_name_max_length	2024-09-09 02:20:59.259535+08
12	auth	0010_alter_group_name_max_length	2024-09-09 02:20:59.269535+08
13	auth	0011_update_proxy_permissions	2024-09-09 02:20:59.280733+08
14	auth	0012_alter_user_first_name_max_length	2024-09-09 02:20:59.288733+08
15	FireDetection	0001_initial	2024-09-09 02:20:59.381997+08
16	FireDetection	0002_alter_customuser_options_alter_customuser_managers_and_more	2024-09-09 02:20:59.448174+08
17	admin	0001_initial	2024-09-09 02:20:59.486904+08
18	admin	0002_logentry_remove_auto_add	2024-09-09 02:20:59.495901+08
19	admin	0003_logentry_add_action_flag_choices	2024-09-09 02:20:59.508229+08
20	sessions	0001_initial	2024-09-09 02:20:59.526002+08
21	FireDetection	0003_customuser_name_customuser_role_customuser_verified	2024-09-09 02:29:21.291838+08
22	FireDetection	0004_alter_customuser_managers	2024-09-27 10:34:58.939014+08
23	FireDetection	0005_initialreport_resolved	2024-09-29 06:34:23.582738+08
\.


--
-- TOC entry 4905 (class 0 OID 25804)
-- Dependencies: 235
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
sjqpewwpce076s6pu2nxrwl4pes39dnl	.eJxVi0sOwiAQQO_C2jQUCgwujXoNMgxDIGqbFLoy3l1NutDt-zxFwK2XsDVeQ03iKEZx-GUR6cbzV1zrymfuTL0u87DzNlweWO-nvfpbC7by-SKgsYp9VoYgkzNKkjUOoiJiZIkgpU8joLaRpkk7RGktReW1hpS1eL0BbTw1pw:1stc40:464-9Ke7qdAeyNruwA2miQVs3ge-jaf9B9vRI8GFjR8	2024-10-10 08:08:56.221655+08
rke1jcojwoicln4s209pon3xjdzs363k	.eJxVi0sOwiAQQO_C2jTQQgGXRr0GmRmGQNQ2KXRlevdq0oVu3-ctAqwth7XyEkoUZ6F6cfqFCPTg6WvuZeErN6ZW5qk7eO1uLyjPy1H9rRlq_nxGGs99MpJ81KzG0TNikoNLkmMCxEGBReNsAueAvJbaWyRN0aECQ2LbAZwCNqM:1sw8s6:GBU6KPqoAfD59rKhazBvQJjttnr6sntaAVulxMumFzI	2024-10-17 07:35:06.053566+08
\.


--
-- TOC entry 4911 (class 0 OID 0)
-- Dependencies: 229
-- Name: FireDetection_customuser_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."FireDetection_customuser_groups_id_seq"', 1, false);


--
-- TOC entry 4912 (class 0 OID 0)
-- Dependencies: 227
-- Name: FireDetection_customuser_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."FireDetection_customuser_id_seq"', 12, true);


--
-- TOC entry 4913 (class 0 OID 0)
-- Dependencies: 231
-- Name: FireDetection_customuser_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."FireDetection_customuser_user_permissions_id_seq"', 1, false);


--
-- TOC entry 4914 (class 0 OID 0)
-- Dependencies: 225
-- Name: FireDetection_initialreport_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."FireDetection_initialreport_id_seq"', 13, true);


--
-- TOC entry 4915 (class 0 OID 0)
-- Dependencies: 221
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- TOC entry 4916 (class 0 OID 0)
-- Dependencies: 223
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- TOC entry 4917 (class 0 OID 0)
-- Dependencies: 219
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 28, true);


--
-- TOC entry 4918 (class 0 OID 0)
-- Dependencies: 233
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 14, true);


--
-- TOC entry 4919 (class 0 OID 0)
-- Dependencies: 217
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 7, true);


--
-- TOC entry 4920 (class 0 OID 0)
-- Dependencies: 215
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 23, true);


--
-- TOC entry 4714 (class 2606 OID 25746)
-- Name: FireDetection_customuser_groups FireDetection_customuser_customuser_id_group_id_24c6b4f4_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FireDetection_customuser_groups"
    ADD CONSTRAINT "FireDetection_customuser_customuser_id_group_id_24c6b4f4_uniq" UNIQUE (customuser_id, group_id);


--
-- TOC entry 4720 (class 2606 OID 25760)
-- Name: FireDetection_customuser_user_permissions FireDetection_customuser_customuser_id_permission_03cf49b7_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FireDetection_customuser_user_permissions"
    ADD CONSTRAINT "FireDetection_customuser_customuser_id_permission_03cf49b7_uniq" UNIQUE (customuser_id, permission_id);


--
-- TOC entry 4710 (class 2606 OID 25775)
-- Name: FireDetection_customuser FireDetection_customuser_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FireDetection_customuser"
    ADD CONSTRAINT "FireDetection_customuser_email_key" UNIQUE (email);


--
-- TOC entry 4718 (class 2606 OID 25737)
-- Name: FireDetection_customuser_groups FireDetection_customuser_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FireDetection_customuser_groups"
    ADD CONSTRAINT "FireDetection_customuser_groups_pkey" PRIMARY KEY (id);


--
-- TOC entry 4712 (class 2606 OID 25729)
-- Name: FireDetection_customuser FireDetection_customuser_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FireDetection_customuser"
    ADD CONSTRAINT "FireDetection_customuser_pkey" PRIMARY KEY (id);


--
-- TOC entry 4724 (class 2606 OID 25743)
-- Name: FireDetection_customuser_user_permissions FireDetection_customuser_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FireDetection_customuser_user_permissions"
    ADD CONSTRAINT "FireDetection_customuser_user_permissions_pkey" PRIMARY KEY (id);


--
-- TOC entry 4707 (class 2606 OID 25723)
-- Name: FireDetection_initialreport FireDetection_initialreport_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FireDetection_initialreport"
    ADD CONSTRAINT "FireDetection_initialreport_pkey" PRIMARY KEY (id);


--
-- TOC entry 4697 (class 2606 OID 25714)
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- TOC entry 4702 (class 2606 OID 25700)
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- TOC entry 4705 (class 2606 OID 25689)
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 4699 (class 2606 OID 25681)
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- TOC entry 4692 (class 2606 OID 25691)
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- TOC entry 4694 (class 2606 OID 25675)
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- TOC entry 4727 (class 2606 OID 25791)
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- TOC entry 4687 (class 2606 OID 25669)
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- TOC entry 4689 (class 2606 OID 25667)
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- TOC entry 4685 (class 2606 OID 25661)
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 4731 (class 2606 OID 25810)
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- TOC entry 4708 (class 1259 OID 25776)
-- Name: FireDetection_customuser_email_248a39c8_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FireDetection_customuser_email_248a39c8_like" ON public."FireDetection_customuser" USING btree (email varchar_pattern_ops);


--
-- TOC entry 4715 (class 1259 OID 25757)
-- Name: FireDetection_customuser_groups_customuser_id_139417c4; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FireDetection_customuser_groups_customuser_id_139417c4" ON public."FireDetection_customuser_groups" USING btree (customuser_id);


--
-- TOC entry 4716 (class 1259 OID 25758)
-- Name: FireDetection_customuser_groups_group_id_e73d40b9; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FireDetection_customuser_groups_group_id_e73d40b9" ON public."FireDetection_customuser_groups" USING btree (group_id);


--
-- TOC entry 4721 (class 1259 OID 25771)
-- Name: FireDetection_customuser_u_customuser_id_05cbedd1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FireDetection_customuser_u_customuser_id_05cbedd1" ON public."FireDetection_customuser_user_permissions" USING btree (customuser_id);


--
-- TOC entry 4722 (class 1259 OID 25772)
-- Name: FireDetection_customuser_u_permission_id_cba79b9e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "FireDetection_customuser_u_permission_id_cba79b9e" ON public."FireDetection_customuser_user_permissions" USING btree (permission_id);


--
-- TOC entry 4695 (class 1259 OID 25715)
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- TOC entry 4700 (class 1259 OID 25711)
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- TOC entry 4703 (class 1259 OID 25712)
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- TOC entry 4690 (class 1259 OID 25697)
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- TOC entry 4725 (class 1259 OID 25802)
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- TOC entry 4728 (class 1259 OID 25803)
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- TOC entry 4729 (class 1259 OID 25812)
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- TOC entry 4732 (class 1259 OID 25811)
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- TOC entry 4738 (class 2606 OID 25761)
-- Name: FireDetection_customuser_user_permissions FireDetection_custom_customuser_id_05cbedd1_fk_FireDetec; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FireDetection_customuser_user_permissions"
    ADD CONSTRAINT "FireDetection_custom_customuser_id_05cbedd1_fk_FireDetec" FOREIGN KEY (customuser_id) REFERENCES public."FireDetection_customuser"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4736 (class 2606 OID 25747)
-- Name: FireDetection_customuser_groups FireDetection_custom_customuser_id_139417c4_fk_FireDetec; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FireDetection_customuser_groups"
    ADD CONSTRAINT "FireDetection_custom_customuser_id_139417c4_fk_FireDetec" FOREIGN KEY (customuser_id) REFERENCES public."FireDetection_customuser"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4737 (class 2606 OID 25752)
-- Name: FireDetection_customuser_groups FireDetection_custom_group_id_e73d40b9_fk_auth_grou; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FireDetection_customuser_groups"
    ADD CONSTRAINT "FireDetection_custom_group_id_e73d40b9_fk_auth_grou" FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4739 (class 2606 OID 25766)
-- Name: FireDetection_customuser_user_permissions FireDetection_custom_permission_id_cba79b9e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FireDetection_customuser_user_permissions"
    ADD CONSTRAINT "FireDetection_custom_permission_id_cba79b9e_fk_auth_perm" FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4734 (class 2606 OID 25706)
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4735 (class 2606 OID 25701)
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4733 (class 2606 OID 25692)
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4740 (class 2606 OID 25792)
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4741 (class 2606 OID 25797)
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_FireDetec; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT "django_admin_log_user_id_c564eba6_fk_FireDetec" FOREIGN KEY (user_id) REFERENCES public."FireDetection_customuser"(id) DEFERRABLE INITIALLY DEFERRED;


-- Completed on 2024-10-04 20:07:45

--
-- PostgreSQL database dump complete
--
