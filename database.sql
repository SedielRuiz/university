-- MySQL dump 10.13  Distrib 9.0.1, for macos14.4 (arm64)
--
-- Host: localhost    Database: university
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `credits` int NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Mathematics','Basic principles of algebra and calculus',3,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(2,'Physics','Introduction to mechanics and thermodynamics',3,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(3,'Chemistry','Fundamentals of organic and inorganic chemistry',3,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(4,'Biology','Cell biology and genetics overview',3,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(5,'Computer Science','Introduction to programming and algorithms',3,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(6,'History','World history from ancient to modern times',3,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(7,'English Literature','Study of classic and modern English works',3,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(8,'Economics','Principles of microeconomics and macroeconomics',3,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(9,'Philosophy','Introduction to philosophical thought and ethics',3,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(10,'Art','Basics of drawing, painting, and art history',3,1,'2024-11-24 04:28:46','2024-11-24 04:28:46');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,1732401976807,'NpmConfigName1732401976807'),(2,1732402201127,'NpmConfigName1732402201127'),(3,1732402697573,'NpmConfigName1732402697573'),(4,1732402821120,'NpmConfigName1732402821120'),(5,1732403325370,'NpmConfigName1732403325370');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_teacher_courses`
--

DROP TABLE IF EXISTS `student_teacher_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_teacher_courses` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint NOT NULL,
  `teacher_course_id` bigint NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_a9d5501aef6810d644bfc9f4578` (`student_id`),
  KEY `FK_a9d5501aef6810d644bfc9f4579` (`teacher_course_id`),
  CONSTRAINT `FK_a9d5501aef6810d644bfc9f4578` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  CONSTRAINT `FK_a9d5501aef6810d644bfc9f4579` FOREIGN KEY (`teacher_course_id`) REFERENCES `teacher_courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_teacher_courses`
--

LOCK TABLES `student_teacher_courses` WRITE;
/*!40000 ALTER TABLE `student_teacher_courses` DISABLE KEYS */;
INSERT INTO `student_teacher_courses` VALUES (1,1,3,'2024-11-24 04:44:09','2024-11-24 04:44:09'),(2,1,1,'2024-11-24 04:44:11','2024-11-24 04:44:11'),(3,2,2,'2024-11-24 04:44:28','2024-11-24 04:44:28'),(4,3,2,'2024-11-24 04:44:30','2024-11-24 04:44:30'),(5,5,1,'2024-11-24 04:44:51','2024-11-24 04:44:51');
/*!40000 ALTER TABLE `student_teacher_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `document` bigint NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` bigint NOT NULL,
  `address` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `birth_date` timestamp NULL DEFAULT NULL,
  `concurrent_courses` int NOT NULL DEFAULT '3',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'John','Doe',12345678901,'john.doe@example.com',5551234567,'123 Main St, Cityville',1,'2000-01-15 05:00:00',3,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(2,'Jane','Smith',12345678902,'jane.smith@example.com',5551234568,'456 Elm St, Townsville',1,'1999-11-23 05:00:00',3,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(3,'Alice','Johnson',12345678903,'alice.johnson@example.com',5551234569,'789 Oak St, Villageton',1,'2001-05-10 05:00:00',3,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(4,'Bob','Brown',12345678904,'bob.brown@example.com',5551234570,'101 Pine St, Hamletburg',1,'2002-07-12 05:00:00',3,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(5,'Charlie','Davis',12345678905,'charlie.davis@example.com',5551234571,'202 Birch St, Suburbia',1,'2000-03-08 05:00:00',3,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(6,'Emily','Wilson',12345678906,'emily.wilson@example.com',5551234572,'303 Cedar St, Metropolis',1,'1998-12-05 05:00:00',3,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(7,'David','Clark',12345678907,'david.clark@example.com',5551234573,'404 Maple St, Cosmopolis',1,'2001-02-19 05:00:00',3,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(8,'Sophia','Martinez',12345678908,'sophia.martinez@example.com',5551234574,'505 Willow St, Urbania',1,'2002-10-22 05:00:00',3,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(9,'Liam','Garcia',12345678909,'liam.garcia@example.com',5551234575,'606 Spruce St, Capitol City',1,'1999-09-30 05:00:00',3,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(10,'Olivia','Rodriguez',12345678910,'olivia.rodriguez@example.com',5551234576,'707 Aspen St, Uptown',1,'1997-04-25 05:00:00',3,'2024-11-24 04:28:46','2024-11-24 04:28:46');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_courses`
--

DROP TABLE IF EXISTS `teacher_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher_courses` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `teacher_id` bigint NOT NULL,
  `course_id` bigint NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_a9d5501aef6810d644bfc9f4576` (`teacher_id`),
  KEY `FK_a9d5501aef6810d644bfc9f4577` (`course_id`),
  CONSTRAINT `FK_a9d5501aef6810d644bfc9f4576` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`),
  CONSTRAINT `FK_a9d5501aef6810d644bfc9f4577` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_courses`
--

LOCK TABLES `teacher_courses` WRITE;
/*!40000 ALTER TABLE `teacher_courses` DISABLE KEYS */;
INSERT INTO `teacher_courses` VALUES (1,1,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(2,1,2,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(3,2,3,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(4,2,4,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(5,3,5,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(6,3,6,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(7,4,7,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(8,4,8,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(9,5,9,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(10,5,10,'2024-11-24 04:28:46','2024-11-24 04:28:46');
/*!40000 ALTER TABLE `teacher_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `courses_offered` int NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'Dr. John Smith',2,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(2,'Prof. Emily Davis',2,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(3,'Dr. Robert Brown',2,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(4,'Prof. Laura Wilson',2,1,'2024-11-24 04:28:46','2024-11-24 04:28:46'),(5,'Dr. James Anderson',2,1,'2024-11-24 04:28:46','2024-11-24 04:28:46');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'university'
--
/*!50003 DROP PROCEDURE IF EXISTS `GetStudentCoursesAndValues` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetStudentCoursesAndValues`(
                IN student_id BIGINT
            )
BEGIN
                SELECT 
                    s.name AS self_student, 
                    c.name AS course, 
                    t.name AS teacher, 
                    ss.name AS other_student,
                    c.credits
                FROM students s
                INNER JOIN student_teacher_courses stc ON stc.student_id = s.id
                INNER JOIN teacher_courses tc ON stc.teacher_course_id = tc.id
                INNER JOIN courses c ON tc.course_id = c.id
                INNER JOIN teachers t ON tc.teacher_id = t.id
                LEFT JOIN student_teacher_courses stc2 ON stc2.teacher_course_id = stc.teacher_course_id
                LEFT JOIN students ss ON stc2.student_id = ss.id AND ss.id != s.id
                WHERE s.id = student_id ORDER BY c.name, t.name, ss.name;
            END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-23 23:51:31
