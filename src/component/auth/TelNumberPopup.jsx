import React, { useState } from 'react';
import usaFlag from '../../assets/images/country/01.png';
import germanyFlag from '../../assets/images/country/49.png';
import iranFlag from '../../assets/images/country/98.png';
import unitedKingdomFlag from '../../assets/images/country/44.png';
import italyFlag from '../../assets/images/country/39.png';
import mongoliaFlag from '../../assets/images/country/976.png';
import matlaFlag from '../../assets/images/country/356.png';
import latviaFlag from '../../assets/images/country/371.png';
import moldovaFlag from '../../assets/images/country/373.png';
import estoniaFlag from '../../assets/images/country/372.png';
import lithuaniaFlag from '../../assets/images/country/370.png';
import canadaFlag from '../../assets/images/country/1.png';
import albaniaFlag from '../../assets/images/country/355.png';
import andorraFlag from '../../assets/images/country/376.png';
import montenegroFlag from '../../assets/images/country/382.png';
import bosniaHerzegovinaFlag from '../../assets/images/country/387.png';
import bulgariaFlag from '../../assets/images/country/359.png';
import vaticanFlag from '../../assets/images/country/379.png';
import hellenicFlag from '../../assets/images/country/30.png';
import cyprusFlag from '../../assets/images/country/357.png';
import turkiyeFlag from '../../assets/images/country/90.png';
import slovakFlag from '../../assets/images/country/421.png';
import qatarFlag from '../../assets/images/country/974.png';
import israelFlag from '../../assets/images/country/972.png';
import kuwaitFlag from '../../assets/images/country/965.png';
import saudiArabiaFlag from '../../assets/images/country/966.png';
import frenchFlag from '../../assets/images/country/33.png';
import spainFlag from '../../assets/images/country/34.png';
import armeniaFlag from '../../assets/images/country/374.png';
import romaniaFlag from '../../assets/images/country/40.png';
import azerbaijanFlag from '../../assets/images/country/994.png';
import southAfricaFlag from '../../assets/images/country/27.png';
import indiaFlag from '../../assets/images/country/91.png';
import liechtensteinFlag from '../../assets/images/country/423.png';
import czechFlag from '../../assets/images/country/420.png';
import irelandFlag from '../../assets/images/country/353.png';
import austriaFlag from '../../assets/images/country/43.png';
import monacoFlag from '../../assets/images/country/377.png';
import luxembourgFlag from '../../assets/images/country/352.png';
import croatiaFlag from '../../assets/images/country/385.png';
import portuguesaFlag from '../../assets/images/country/351.png';
import nederlandFlag from '../../assets/images/country/31.png';
import denmarkFlag from '../../assets/images/country/45.png';
import hungaryFlag from '../../assets/images/country/36.png';
import lebanonFlag from '../../assets/images/country/961.png';
import icelandFlag from '../../assets/images/country/354.png';
import belgiumFlag from '../../assets/images/country/32.png';
import serbiaFlag from '../../assets/images/country/381.png';
import finlandFlag from '../../assets/images/country/358.png';
import switzerlandFlag from '../../assets/images/country/41.png';
import japanFlag from '../../assets/images/country/81.png';
import slovakiaFlag from '../../assets/images/country/421.png';
import polandFlag from '../../assets/images/country/48.png';
import koreaFlag from '../../assets/images/country/82.png';
import swedenFlag from '../../assets/images/country/46.png';
import norwayFlag from '../../assets/images/country/47.png';
import belarusFlag from '../../assets/images/country/375.png';
import malaysiaFlag from '../../assets/images/country/60.png';
import australiaFlag from '../../assets/images/country/61.png';
import kibrisFlag from '../../assets/images/country/357.png';
import northMacedoniaFlag from '../../assets/images/country/389.png';
import kosovaFlag from '../../assets/images/country/383.png';
import kenyaFlag from '../../assets/images/country/254.png';
import abuDhabiFlag from '../../assets/images/country/2.png';
import angolaFlag from '../../assets/images/country/244.png';
import anguillaFlag from '../../assets/images/country/1264.png';
import antiguaBarbudaFlag from '../../assets/images/country/1268.png';
import argentinaFlag from '../../assets/images/country/54.png';
import ascensionFlag from '../../assets/images/country/247.png';
import bahamasFlag from '../../assets/images/country/1242.png';
import bahrainFlag from '../../assets/images/country/973.png';
import bangladeshFlag from '../../assets/images/country/880.png';
import barbadosFlag from '../../assets/images/country/1246.png';
import belizeFlag from '../../assets/images/country/501.png';
import beninFlag from '../../assets/images/country/229.png';
import bermudaIsFlag from '../../assets/images/country/1441.png';
import boliviaFlag from '../../assets/images/country/591.png';
import botswanaFlag from '../../assets/images/country/267.png';
import brazilFlag from '../../assets/images/country/55.png';
import bruneiFlag from '../../assets/images/country/673.png';
import burkinaFasoFlag from '../../assets/images/country/226.png';
import burmaFlag from '../../assets/images/country/95.png';
import burundiFlag from '../../assets/images/country/257.png';
import cameroonFlag from '../../assets/images/country/237.png';
import caymanIsFlag from '../../assets/images/country/1345.png';
import centralAfricanRepublicFlag from '../../assets/images/country/236.png';
import chadFlag from '../../assets/images/country/235.png';
import chileFlag from '../../assets/images/country/56.png';
import chinaFlag from '../../assets/images/country/86.png';
import colombiaFlag from '../../assets/images/country/57.png';
import congoFlag from '../../assets/images/country/242.png';
import cookIsFlag from '../../assets/images/country/682.png';
import costaRicaFlag from '../../assets/images/country/506.png';
import cubaFlag from '../../assets/images/country/53.png';
import djiboutiFlag from '../../assets/images/country/253.png';
import dominicaRepFlag from '../../assets/images/country/1890.png';
import ecuadorFlag from '../../assets/images/country/593.png';
import egyptFlag from '../../assets/images/country/20.png';
import eiSalvadorFlag from '../../assets/images/country/503.png';
import ethiopiaFlag from '../../assets/images/country/251.png';
import fijiFlag from '../../assets/images/country/679.png';
import frenchGuianaFlag from '../../assets/images/country/594.png';
import gabonFlag from '../../assets/images/country/241.png';
import gambiaFlag from '../../assets/images/country/220.png';
import georgiaFlag from '../../assets/images/country/995.png';
import ghanaFlag from '../../assets/images/country/233.png';
import gibraltarFlag from '../../assets/images/country/350.png';
import grenadaFlag from '../../assets/images/country/1809.png';
import guamFlag from '../../assets/images/country/1671.png';
import guatemalaFlag from '../../assets/images/country/502.png';
import guineaFlag from '../../assets/images/country/224.png';
import guyanaFlag from '../../assets/images/country/592.png';
import haitiFlag from '../../assets/images/country/509.png';
import hondurasFlag from '../../assets/images/country/504.png';
import hongkongFlag from '../../assets/images/country/852.png';
import indonesiaFlag from '../../assets/images/country/62.png';
import iraqFlag from '../../assets/images/country/964.png';
import ivoryCoastFlag from '../../assets/images/country/225.png';
import jamaicaFlag from '../../assets/images/country/1876.png';
import jordanFlag from '../../assets/images/country/962.png';
import kampucheaFlag from '../../assets/images/country/855.png';
import kazakstanFlag from '../../assets/images/country/327.png';
import kyrgyzstanFlag from '../../assets/images/country/331.png';
import laosFlag from '../../assets/images/country/856.png';
import lesothoFlag from '../../assets/images/country/266.png';
import liberiaFlag from '../../assets/images/country/231.png';
import libyaFlag from '../../assets/images/country/218.png';
import macaoFlag from '../../assets/images/country/853.png';
import madagascarFlag from '../../assets/images/country/261.png';
import malawiFlag from '../../assets/images/country/265.png';
import maldivesFlag from '../../assets/images/country/960.png';
import maliFlag from '../../assets/images/country/223.png';
import marianaIsFlag from '../../assets/images/country/1670.png';
import martiniqueFlag from '../../assets/images/country/596.png';
import mauritiusFlag from '../../assets/images/country/230.png';
import mexicoFlag from '../../assets/images/country/52.png';
import montserratIsFlag from '../../assets/images/country/1664.png';
import moroccoFlag from '../../assets/images/country/212.png';
import mozambiqueFlag from '../../assets/images/country/258.png';
import namibiaFlag from '../../assets/images/country/264.png';
import nauruFlag from '../../assets/images/country/674.png';
import nepalFlag from '../../assets/images/country/977.png';
import netheriandsAntillesFlag from '../../assets/images/country/599.png';
import newZealandFlag from '../../assets/images/country/64.png';
import zambiaFlag from '../../assets/images/country/260.png';
import nicaraguaFlag from '../../assets/images/country/505.png';
import nigerFlag from '../../assets/images/country/227.png';
import nigeriaFlag from '../../assets/images/country/234.png';
import northKoreaFlag from '../../assets/images/country/850.png';
import omanFlag from '../../assets/images/country/968.png';
import pakistanFlag from '../../assets/images/country/92.png';
import panamaFlag from '../../assets/images/country/507.png';
import papuaNewGuineaFlag from '../../assets/images/country/675.png';
import paraguayFlag from '../../assets/images/country/595.png';
import peruFlag from '../../assets/images/country/51.png';
import philippinesFlag from '../../assets/images/country/63.png';
import frenchPolynesiaFlag from '../../assets/images/country/689.png';
import puertoRicoFlag from '../../assets/images/country/1787.png';
import reunionFlag from '../../assets/images/country/262.png';
import russiaFlag from '../../assets/images/country/7.png';
import saintLuciaFlag from '../../assets/images/country/1758.png';
import saintVincentFlag from '../../assets/images/country/1784.png';
import samoaEasternFlag from '../../assets/images/country/684.png';
import samoaWesternFlag from '../../assets/images/country/685.png';
import saoTomePrincipleFlag from '../../assets/images/country/239.png';
import senegalFlag from '../../assets/images/country/221.png';
import seychellesFlag from '../../assets/images/country/248.png';
import sierraLeoneFlag from '../../assets/images/country/232.png';
import singaporeFlag from '../../assets/images/country/65.png';
import sloveniaFlag from '../../assets/images/country/386.png';
import solomonIsFlag from '../../assets/images/country/677.png';
import somaliFlag from '../../assets/images/country/252.png';
import sriLankaFlag from '../../assets/images/country/94.png';
import stLuciaFlag from '../../assets/images/country/1758.png';
import stVincentFlag from '../../assets/images/country/1784.png';
import sudanFlag from '../../assets/images/country/249.png';
import surinameFlag from '../../assets/images/country/597.png';
import swazilandFlag from '../../assets/images/country/268.png';
import syriaFlag from '../../assets/images/country/963.png';
import taiwanFlag from '../../assets/images/country/886.png';
import tajikstanFlag from '../../assets/images/country/992.png';
import tanzaniaFlag from '../../assets/images/country/255.png';
import thailandFlag from '../../assets/images/country/66.png';
import togoFlag from '../../assets/images/country/228.png';
import tongaFlag from '../../assets/images/country/676.png';
import trinidadTobagoFlag from '../../assets/images/country/1868.png';
import turkmenistanFlag from '../../assets/images/country/993.png';
import ugandaFlag from '../../assets/images/country/256.png';
import ukraineFlag from '../../assets/images/country/380.png';
import unitedArabEmiratesFlag from '../../assets/images/country/971.png';
import uruguayFlag from '../../assets/images/country/598.png';
import uzbekistanFlag from '../../assets/images/country/998.png';
import venezuelaFlag from '../../assets/images/country/58.png';
import vietnamFlag from '../../assets/images/country/84.png';
import yemenFlag from '../../assets/images/country/967.png';
import zimbabweFlag from '../../assets/images/country/263.png';
import zaireFlag from '../../assets/images/country/243.png';
import algeriaFlag from '../../assets/images/country/213.png';
import tunisiaFlag from '../../assets/images/country/216.png';
import afghanistanFlag from '../../assets/images/country/93.png';
const countryData = [
    { name: 'America', code: '+1', img: usaFlag },
    { name: 'Germany', code: '+49', img: germanyFlag },
    { name: 'Iran', code: '+98', img: iranFlag },
    { name: 'United Kingdom', code: '+44', img: unitedKingdomFlag },
    { name: 'Italy', code: '+39', img: italyFlag },
    { name: 'Mongolia', code: '+976', img: mongoliaFlag },
    { name: 'Malta', code: '+356', img: matlaFlag },
    { name: 'Latvia', code: '+371', img: latviaFlag },
    { name: 'Moldova', code: '+373', img: moldovaFlag },
    { name: 'Estonia', code: '+372', img: estoniaFlag },
    { name: 'Lithuania', code: '+370', img: lithuaniaFlag },
    { name: 'Canada', code: '+1', img: canadaFlag },
    { name: 'Albania', code: '+355', img: albaniaFlag },
    { name: 'Andorra', code: '+376', img: andorraFlag },
    { name: 'Montenegro', code: '+382', img: montenegroFlag },
    { name: 'Bosnia and Herzegovina', code: '+387', img: bosniaHerzegovinaFlag },
    { name: 'Bulgaria', code: '+359', img: bulgariaFlag },
    { name: 'Vatican', code: '+379', img: vaticanFlag },
    { name: 'Hellenic', code: '+30', img: hellenicFlag },
    { name: 'Cyprus', code: '+357', img: cyprusFlag },
    { name: 'Türkiye', code: '+90', img: turkiyeFlag },
    { name: 'Slovak', code: '+421', img: slovakFlag },
    { name: 'Qatar', code: '+974', img: qatarFlag },
    { name: 'Israel', code: '+972', img: israelFlag },
    { name: 'Kuwait', code: '+965', img: kuwaitFlag },
    { name: 'Saudi Arabia', code: '+966', img: saudiArabiaFlag },
    { name: 'French', code: '+33', img: frenchFlag },
    { name: 'Spain', code: '+34', img: spainFlag },
    { name: 'Armenia', code: '+374', img: armeniaFlag },
    { name: 'Romania', code: '+40', img: romaniaFlag },
    { name: 'Azerbaijan', code: '+994', img: azerbaijanFlag },
    { name: 'South Africa', code: '+27', img: southAfricaFlag },
    { name: 'India', code: '+91', img: indiaFlag },
    { name: 'Liechtenstein', code: '+423', img: liechtensteinFlag },
    { name: 'Czech', code: '+420', img: czechFlag },
    { name: 'Ireland', code: '+353', img: irelandFlag },
    { name: 'Austria', code: '+43', img: austriaFlag },
    { name: 'Monaco', code: '+377', img: monacoFlag },
    { name: 'Luxembourg', code: '+352', img: luxembourgFlag },
    { name: 'Croatia', code: '+385', img: croatiaFlag },
    { name: 'Portuguesa', code: '+351', img: portuguesaFlag },
    { name: 'Nederland', code: '+31', img: nederlandFlag },
    { name: 'Denmark', code: '+45', img: denmarkFlag },
    { name: 'Hungary', code: '+36', img: hungaryFlag },
    { name: 'Lebanon', code: '+961', img: lebanonFlag },
    { name: 'Iceland', code: '+354', img: icelandFlag },
    { name: 'Belgium', code: '+32', img: belgiumFlag },
    { name: 'Serbia', code: '+381', img: serbiaFlag },
    { name: 'Finland', code: '+358', img: finlandFlag },
    { name: 'Switzerland', code: '+41', img: switzerlandFlag },
    { name: 'Japan', code: '+81', img: japanFlag },
    { name: 'Slovakia', code: '+421', img: slovakiaFlag },
    { name: 'Poland', code: '+48', img: polandFlag },
    { name: 'Korea', code: '+82', img: koreaFlag },
    { name: 'Sweden', code: '+46', img: swedenFlag },
    { name: 'Norway', code: '+47', img: norwayFlag },
    { name: 'Belarus', code: '+375', img: belarusFlag },
    { name: 'Malaysia', code: '+60', img: malaysiaFlag },
    { name: 'Australia', code: '+61', img: australiaFlag },
    { name: 'Kıbrıs', code: '+357', img: kibrisFlag },
    { name: 'North Macedonia', code: '+389', img: northMacedoniaFlag },
    { name: 'Kosova', code: '+383', img: kosovaFlag },
    { name: 'Kenya', code: '+254', img: kenyaFlag },
    { name: 'Abu Dhabi', code: '+2', img: abuDhabiFlag },
    { name: 'Angola', code: '+244', img: angolaFlag },
    { name: 'Anguilla', code: '+1264', img: anguillaFlag },
    { name: 'Antigua and Barbuda', code: '+1268', img: antiguaBarbudaFlag },
    { name: 'Argentina', code: '+54', img: argentinaFlag },
    { name: 'Ascension', code: '+247', img: ascensionFlag },
    { name: 'Bahamas', code: '+1242', img: bahamasFlag },
    { name: 'Bahrain', code: '+973', img: bahrainFlag },
    { name: 'Bangladesh', code: '+880', img: bangladeshFlag },
    { name: 'Barbados', code: '+1246', img: barbadosFlag },
    { name: 'Belize', code: '+501', img: belizeFlag },
    { name: 'Benin', code: '+229', img: beninFlag },
    { name: 'Bermuda Is.', code: '+1441', img: bermudaIsFlag },
    { name: 'Bolivia', code: '+591', img: boliviaFlag },
    { name: 'Botswana', code: '+267', img: botswanaFlag },
    { name: 'Brazil', code: '+55', img: brazilFlag },
    { name: 'Brunei', code: '+673', img: bruneiFlag },
    { name: 'Burkina-faso', code: '+226', img: burkinaFasoFlag },
    { name: 'Burma', code: '+95', img: burmaFlag },
    { name: 'Burundi', code: '+257', img: burundiFlag },
    { name: 'Cameroon', code: '+237', img: cameroonFlag },
    { name: 'Cayman Is.', code: '+1345', img: caymanIsFlag },
    { name: 'Central African Republic', code: '+236', img: centralAfricanRepublicFlag },
    { name: 'Chad', code: '+235', img: chadFlag },
    { name: 'Chile', code: '+56', img: chileFlag },
    { name: 'China', code: '+86', img: chinaFlag },
    { name: 'Colombia', code: '+57', img: colombiaFlag },
    { name: 'Congo', code: '+242', img: congoFlag },
    { name: 'Cook Is.', code: '+682', img: cookIsFlag },
    { name: 'Costa Rica', code: '+506', img: costaRicaFlag },
    { name: 'Cuba', code: '+53', img: cubaFlag },
    { name: 'Djibouti', code: '+253', img: djiboutiFlag },
    { name: 'Dominica Rep.', code: '+1890', img: dominicaRepFlag },
    { name: 'Ecuador', code: '+593', img: ecuadorFlag },
    { name: 'Egypt', code: '+20', img: egyptFlag },
    { name: 'EI Salvador', code: '+503', img: eiSalvadorFlag },
    { name: 'Ethiopia', code: '+251', img: ethiopiaFlag },
    { name: 'Fiji', code: '+679', img: fijiFlag },
    { name: 'French Guiana', code: '+594', img: frenchGuianaFlag },
    { name: 'Gabon', code: '+241', img: gabonFlag },
    { name: 'Gambia', code: '+220', img: gambiaFlag },
    { name: 'Georgia', code: '+995', img: georgiaFlag },
    { name: 'Ghana', code: '+233', img: ghanaFlag },
    { name: 'Gibraltar', code: '+350', img: gibraltarFlag },
    { name: 'Grenada', code: '+1809', img: grenadaFlag },
    { name: 'Guam', code: '+1671', img: guamFlag },
    { name: 'Guatemala', code: '+502', img: guatemalaFlag },
    { name: 'Guinea', code: '+224', img: guineaFlag },
    { name: 'Guyana', code: '+592', img: guyanaFlag },
    { name: 'Haiti', code: '+509', img: haitiFlag },
    { name: 'Honduras', code: '+504', img: hondurasFlag },
    { name: 'Hongkong', code: '+852', img: hongkongFlag },
    { name: 'Indonesia', code: '+62', img: indonesiaFlag },
    { name: 'Iraq', code: '+964', img: iraqFlag },
    { name: 'Ivory Coast', code: '+225', img: ivoryCoastFlag },
    { name: 'Jamaica', code: '+1876', img: jamaicaFlag },
    { name: 'Jordan', code: '+962', img: jordanFlag },
    { name: 'Kampuchea (Cambodia)', code: '+855', img: kampucheaFlag },
    { name: 'Kazakstan', code: '+327', img: kazakstanFlag },
    { name: 'Kyrgyzstan', code: '+331', img: kyrgyzstanFlag },
    { name: 'Laos', code: '+856', img: laosFlag },
    { name: 'Lesotho', code: '+266', img: lesothoFlag },
    { name: 'Liberia', code: '+231', img: liberiaFlag },
    { name: 'Libya', code: '+218', img: libyaFlag },
    { name: 'Macao', code: '+853', img: macaoFlag },
    { name: 'Madagascar', code: '+261', img: madagascarFlag },
    { name: 'Malawi', code: '+265', img: malawiFlag },
    { name: 'Maldives', code: '+960', img: maldivesFlag },
    { name: 'Mali', code: '+223', img: maliFlag },
    { name: 'Mariana Is', code: '+1670', img: marianaIsFlag },
    { name: 'Martinique', code: '+596', img: martiniqueFlag },
    { name: 'Mauritius', code: '+230', img: mauritiusFlag },
    { name: 'Mexico', code: '+52', img: mexicoFlag },
    { name: 'Montserrat Is', code: '+1664', img: montserratIsFlag },
    { name: 'Morocco', code: '+212', img: moroccoFlag },
    { name: 'Mozambique', code: '+258', img: mozambiqueFlag },
    { name: 'Namibia', code: '+264', img: namibiaFlag },
    { name: 'Nauru', code: '+674', img: nauruFlag },
    { name: 'Nepal', code: '+977', img: nepalFlag },
    { name: 'Netheriands Antilles', code: '+599', img: netheriandsAntillesFlag },
    { name: 'New Zealand', code: '+64', img: newZealandFlag },
    { name: 'Zambia', code: '+260', img: zambiaFlag },
    { name: 'Nicaragua', code: '+505', img: nicaraguaFlag },
    { name: 'Niger', code: '+227', img: nigerFlag },
    { name: 'Nigeria', code: '+234', img: nigeriaFlag },
    { name: 'North Korea', code: '+850', img: northKoreaFlag },
    { name: 'Oman', code: '+968', img: omanFlag },
    { name: 'Pakistan', code: '+92', img: pakistanFlag },
    { name: 'Panama', code: '+507', img: panamaFlag },
    { name: 'Papua New Guinea', code: '+675', img: papuaNewGuineaFlag },
    { name: 'Paraguay', code: '+595', img: paraguayFlag },
    { name: 'Peru', code: '+51', img: peruFlag },
    { name: 'Philippines', code: '+63', img: philippinesFlag },
    { name: 'French Polynesia', code: '+689', img: frenchPolynesiaFlag },
    { name: 'Puerto Rico', code: '+1787', img: puertoRicoFlag },
    { name: 'Reunion', code: '+262', img: reunionFlag },
    { name: 'Russia', code: '+7', img: russiaFlag },
    { name: 'Saint Lucia', code: '+1758', img: saintLuciaFlag },
    { name: 'Saint Vincent', code: '+1784', img: saintVincentFlag },
    { name: 'Samoa Eastern', code: '+684', img: samoaEasternFlag },
    { name: 'Samoa Western', code: '+685', img: samoaWesternFlag },
    { name: 'Sao Tome and Principe', code: '+239', img: saoTomePrincipleFlag },
    { name: 'Senegal', code: '+221', img: senegalFlag },
    { name: 'Seychelles', code: '+248', img: seychellesFlag },
    { name: 'Sierra Leone', code: '+232', img: sierraLeoneFlag },
    { name: 'Singapore', code: '+65', img: singaporeFlag },
    { name: 'Slovenia', code: '+386', img: sloveniaFlag },
    { name: 'Solomon Is', code: '+677', img: solomonIsFlag },
    { name: 'Somali', code: '+252', img: somaliFlag },
    { name: 'Sri Lanka', code: '+94', img: sriLankaFlag },
    { name: 'St. Lucia', code: '+1758', img: stLuciaFlag },
    { name: 'St. Vincent', code: '+1784', img: stVincentFlag },
    { name: 'Sudan', code: '+249', img: sudanFlag },
    { name: 'Suriname', code: '+597', img: surinameFlag },
    { name: 'Swaziland', code: '+268', img: swazilandFlag },
    { name: 'Syria', code: '+963', img: syriaFlag },
    { name: 'Taiwan', code: '+886', img: taiwanFlag },
    { name: 'Tajikstan', code: '+992', img: tajikstanFlag },
    { name: 'Tanzania', code: '+255', img: tanzaniaFlag },
    { name: 'Thailand', code: '+66', img: thailandFlag },
    { name: 'Togo', code: '+228', img: togoFlag },
    { name: 'Tonga', code: '+676', img: tongaFlag },
    { name: 'Trinidad and Tobago', code: '+1868', img: trinidadTobagoFlag },
    { name: 'Turkmenistan', code: '+993', img: turkmenistanFlag },
    { name: 'Uganda', code: '+256', img: ugandaFlag },
    { name: 'Ukraine', code: '+380', img: ukraineFlag },
    { name: 'United Arab Emirates', code: '+971', img: unitedArabEmiratesFlag },
    { name: 'Uruguay', code: '+598', img: uruguayFlag },
    { name: 'Uzbekistan', code: '+998', img: uzbekistanFlag },
    { name: 'Venezuela', code: '+58', img: venezuelaFlag },
    { name: 'Vietnam', code: '+84', img: vietnamFlag },
    { name: 'Yemen', code: '+967', img: yemenFlag },
    { name: 'Zimbabwe', code: '+263', img: zimbabweFlag },
    { name: 'Zaire', code: '+243', img: zaireFlag },
    { name: 'Algeria', code: '+213', img: algeriaFlag },
    { name: 'Tunisia', code: '+216', img: tunisiaFlag },
    { name: 'Afghanistan', code: '+93', img: afghanistanFlag }
];

const TelNumberPopup = ({ handleTelView, isOpen , handleCountrySelect , selectedCode}) => {
    const [search, setSearch] = useState('');

    const filteredCountries = countryData.filter(country =>
        country.name.toLowerCase().includes(search.toLowerCase()) ||
        country.code.includes(search)
    );
  

    return (
        <div>
            <div
                className={`van-overlay ${isOpen ? 'd-block' : 'd-none'}`}
                role="button"
                tabIndex={0}
                style={{ zIndex: 2030 }} onClick={handleTelView}
            ></div>
            <div className={`van-popup van-popup-2 van-popup--round van-popup--bottom overflow-hidden ${isOpen ? 'd-block' : 'd-none'}`} style={{ zIndex: "2034", height: "50%" }} data-v-c7a345ea="">
                <div className=":uno: m-10px h-full flex flex-col overflow-hidden a-t-30" data-v-c7a345ea="">
                    <div data-v-c7a345ea="" className=":uno: mx-auto h-40px max-w-720px w-full flex items-center border border-#86909C rounded-12px border-solid px-10px text-slate-500">
                        <div data-v-c7a345ea="" className="i-ph-magnifying-glass-bold"></div>
                        {/* <i className="icon van-icon van-icon-search"></i> */}
                        <input
                            data-v-c7a345ea=""
                            type="text"
                            placeholder="Search country code"
                            className=":uno: input ml-10px flex-1 text-slate-700"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <ul data-v-c7a345ea="" className=":uno: mx-auto mt-10px max-w-720px w-full flex-1 overflow-y-auto">
                        {filteredCountries.map((country, index) => (
                            <li key={index} data-v-c7a345ea="" className="mb-8px mb-8px flex cursor-pointer items-center border-b border-$text-gray p-8px text-$btn-text text-[var(--primary)]!" onClick={() => {
                                handleCountrySelect(country.code); // Pass country code to parent
                                handleTelView(); // Close the popup
                            }}>
                                <img src={country.img} alt={country.name} className="mr-4px" style={{ maxWidth: "20px" }} />
                                <span data-v-c7a345ea="" className="mr-4px">{country.name}</span>
                                <span data-v-c7a345ea="" className="mr-4px">{country.code}</span>
                                {selectedCode === country.code &&(
                                    <div className="i-line-md-confirm-circle-twotone ml-auto text-20px"></div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default TelNumberPopup;