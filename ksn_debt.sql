/*
Navicat MySQL Data Transfer

Source Server         : 30.23.1.1_3306
Source Server Version : 50612
Source Host           : 30.23.1.1:3306
Source Database       : hos

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2017-02-17 09:54:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `ksn_debt`
-- ----------------------------
DROP TABLE IF EXISTS `ksn_debt`;
CREATE TABLE `ksn_debt` (
  `debt_name` varchar(255) DEFAULT NULL,
  `pttype_std_code` varchar(4) NOT NULL DEFAULT '',
  PRIMARY KEY (`pttype_std_code`)
) ENGINE=MyISAM DEFAULT CHARSET=tis620;

-- ----------------------------
-- Records of ksn_debt
-- ----------------------------
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา เบิกต้นสังกัด', 'OFC');
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา CSCD', 'CSCD');
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา UC', 'UCS');
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา UC นอก CUP ในจังหวัด', 'UCSI');
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา UC นอก CUP ต่างจังหวัด', 'UCSO');
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา UC AE', 'UCAE');
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา UC HC', 'UCHC');
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา ประกันสังคม มหาราช', 'SSS');
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา กองทุนทดแทน', 'SSO');
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา ท้องถิ่น', 'LGO');
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา พรบ.', 'CAR');
INSERT INTO `ksn_debt` VALUES ('ลูกหนี้ค่ารักษา แรงงานต่างด้าว', 'FRN');
