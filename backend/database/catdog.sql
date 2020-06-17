-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2020 a las 17:51:48
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `catdog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animales`
--

CREATE TABLE `animales` (
  `ani_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `ani_nombre` varchar(100) NOT NULL,
  `ani_imagen` varchar(100) NOT NULL,
  `ani_descripcion` varchar(900) NOT NULL,
  `ani_sexo` varchar(15) NOT NULL,
  `ani_raza_id` int(11) NOT NULL,
  `ani_edad_mes` tinyint(30) NOT NULL,
  `ani_vacunas` tinyint(1) NOT NULL,
  `ani_castrado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `animales`
--

INSERT INTO `animales` (`ani_id`, `user_id`, `ani_nombre`, `ani_imagen`, `ani_descripcion`, `ani_sexo`, `ani_raza_id`, `ani_edad_mes`, `ani_vacunas`, `ani_castrado`) VALUES
(1, 3, 'Gretchen', 'http://localhost:8888/images/1590126755530.jpg', 'Gretchen es una gatita rescatada de un basural junto a sus hermanos, quienes ya fueron adoptados. Es muy mimosa y a la vez independiente, se merece una familia con mucho amor para dar.', '', 0, 0, 0, 0),
(120, 1, 'Salem', 'http://localhost:8888/images/1589594571905.jpg', 'ajdbjhabsd', '', 0, 0, 0, 0),
(130, 3, 'Ponchi', 'http://localhost:8888/images/1590126951654.jfif', 'Lorem aaskdjsdjsksssss', '', 0, 0, 0, 0),
(137, 3, 'Dalí', 'http://localhost:8888/images/1590126924068.jpg', 'Mi bebé hermoso', '', 0, 0, 0, 0),
(138, 3, 'Ambar', 'http://localhost:8888/images/1590134627042.jfif', '', '', 0, 0, 0, 0),
(146, 3, 'Quinto', 'http://localhost:8888/images/1590285382689.jpg', '', '', 0, 0, 0, 0),
(147, 3, 'Ciro', 'http://localhost:8888/images/1590285408410.jfif', '', '', 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animal_tags`
--

CREATE TABLE `animal_tags` (
  `anitag_animal_id` int(11) NOT NULL,
  `anitag_tag_id` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contac`
--

CREATE TABLE `contac` (
  `user_id` int(11) NOT NULL,
  `ani_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos_preguntas`
--

CREATE TABLE `contactos_preguntas` (
  `contac_user_id` int(11) NOT NULL,
  `contac_ani_id` int(11) NOT NULL,
  `contac_pregunta_id` int(11) NOT NULL,
  `contac_respuesta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `user_id` int(11) NOT NULL,
  `ani_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `favoritos`
--

INSERT INTO `favoritos` (`user_id`, `ani_id`) VALUES
(3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `contac_pregunta_id` int(11) NOT NULL,
  `pregunta_consigna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `razas`
--

CREATE TABLE `razas` (
  `razas_id` int(11) NOT NULL,
  `razas_nombre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tags`
--

CREATE TABLE `tags` (
  `tag_id` smallint(6) NOT NULL,
  `tag_zona` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tags`
--

INSERT INTO `tags` (`tag_id`, `tag_zona`) VALUES
(1, 'CABA (Ciudad Autónoma de Buenos Aires) '),
(2, 'Zona Oeste'),
(3, 'Zona Sur'),
(4, 'Zona Norte'),
(5, 'Provincia de Buenos Aires');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `user_id` int(11) NOT NULL,
  `user_nombre` varchar(10) NOT NULL,
  `user_password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`user_id`, `user_nombre`, `user_password`) VALUES
(1, 'Florencia', '123'),
(3, 'Sol', '456');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `animales`
--
ALTER TABLE `animales`
  ADD PRIMARY KEY (`ani_id`),
  ADD KEY `ani_user_id` (`user_id`),
  ADD KEY `ani_raza_id` (`ani_raza_id`);

--
-- Indices de la tabla `animal_tags`
--
ALTER TABLE `animal_tags`
  ADD PRIMARY KEY (`anitag_animal_id`,`anitag_tag_id`),
  ADD KEY `anitag_tag_id` (`anitag_tag_id`);

--
-- Indices de la tabla `contac`
--
ALTER TABLE `contac`
  ADD PRIMARY KEY (`user_id`,`ani_id`);

--
-- Indices de la tabla `contactos_preguntas`
--
ALTER TABLE `contactos_preguntas`
  ADD PRIMARY KEY (`contac_user_id`),
  ADD UNIQUE KEY `contac_pregunta_id` (`contac_pregunta_id`);

--
-- Indices de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`user_id`,`ani_id`),
  ADD KEY `ani_id` (`ani_id`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`contac_pregunta_id`);

--
-- Indices de la tabla `razas`
--
ALTER TABLE `razas`
  ADD PRIMARY KEY (`razas_id`);

--
-- Indices de la tabla `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`tag_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_nombre` (`user_nombre`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `animales`
--
ALTER TABLE `animales`
  MODIFY `ani_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `contac_pregunta_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `razas`
--
ALTER TABLE `razas`
  MODIFY `razas_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tags`
--
ALTER TABLE `tags`
  MODIFY `tag_id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `animales`
--
ALTER TABLE `animales`
  ADD CONSTRAINT `animales_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`user_id`);

--
-- Filtros para la tabla `animal_tags`
--
ALTER TABLE `animal_tags`
  ADD CONSTRAINT `animal_tags_ibfk_1` FOREIGN KEY (`anitag_animal_id`) REFERENCES `animales` (`ani_id`),
  ADD CONSTRAINT `animal_tags_ibfk_2` FOREIGN KEY (`anitag_tag_id`) REFERENCES `tags` (`tag_id`);

--
-- Filtros para la tabla `contac`
--
ALTER TABLE `contac`
  ADD CONSTRAINT `contac_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`user_id`);

--
-- Filtros para la tabla `contactos_preguntas`
--
ALTER TABLE `contactos_preguntas`
  ADD CONSTRAINT `contactos_preguntas_ibfk_1` FOREIGN KEY (`contac_user_id`) REFERENCES `contac` (`user_id`);

--
-- Filtros para la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`user_id`);

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`contac_pregunta_id`) REFERENCES `contactos_preguntas` (`contac_pregunta_id`);

--
-- Filtros para la tabla `razas`
--
ALTER TABLE `razas`
  ADD CONSTRAINT `razas_ibfk_1` FOREIGN KEY (`razas_id`) REFERENCES `animales` (`ani_raza_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
