--
-- PostgreSQL database dump
--

-- Dumped from database version 11.4 (Ubuntu 11.4-1.pgdg18.10+1)
-- Dumped by pg_dump version 11.4 (Ubuntu 11.4-1.pgdg18.10+1)

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

SET default_with_oids = false;


CREATE DATABASE crud;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users  (
    id character(5) NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    datanasc date,
    create_in date NOT NULL
);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, name, email, datanasc, create_in) FROM stdin;
\.


--
-- Name: users firstkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT firstkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

