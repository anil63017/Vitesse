import mock from '../mock'

// ** Utils
import { paginateArray } from '../utils'

import avatar1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import avatar4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import avatar5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar7 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import avatar8 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
import avatar9 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import avatar10 from '@src/assets/images/portrait/small/avatar-s-10.jpg'

const data = [{
  "_id": {
    "$oid": "6567899227383b014e67588d"
  },
  "employeeId": 19001,
  "firstName": "Vemparala",
  "lastName": "Ashok",
  "phone": "(603) 858-9501",
  "email": "ashok.vemparala123@gmail.com",
  "entryDate": "3/23/2022",
  "status": "Active",
  "address": "750 S 40th Street",
  "street": "B202",
  "city": "Springdale",
  "state": "AR",
  "zip": 72762,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "656a009e759f7568e84b83b8"
  },
  "employeeId": 19004,
  "firstName": "Paruchuri",
  "lastName": "Leela Krishna",
  "phone": "(510) 200-6385",
  "email": "krisparu72@gmail.com",
  "entryDate": "3/23/2022",
  "status": "Active",
  "address": "300 N E Moberly Lane",
  "street": "Apt B6",
  "city": "Bentonville",
  "state": "AR",
  "zip": 72712,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "656a009e759f7568e84b83b9"
  },
  "employeeId": 19005,
  "firstName": "Edala",
  "lastName": "Ramu",
  "phone": "(845) 327-9784",
  "email": "ramuetechnologies@gmail.com",
  "entryDate": "3/23/2022",
  "status": "Active",
  "address": "6245 Lakesprings, Dr",
  "street": "N/A",
  "city": "Mason",
  "state": "OH",
  "zip": 45040,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b10",
  "employeeId": 19006,
  "firstName": "Baliji",
  "lastName": "Jeevan Sai Santosh",
  "phone": "(724) 978-1993",
  "email": "balijijeevan@gmail.com",
  "entryDate": "3/23/2022",
  "status": "Active",
  "address": "2703 SW Boilermaker Rd",
  "street": "Apt 31",
  "city": "Bentonville",
  "state": "AR",
  "zip": 72712,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b11",
  "employeeId": 19007,
  "firstName": "Sagi",
  "lastName": "Sasank Varma",
  "phone": "(516) 853-1190",
  "email": "sasa.sasank@gmail.com",
  "entryDate": "3/23/2022",
  "status": "Active",
  "address": "2703 SW Boilermaker Rd",
  "street": "Apt 31",
  "city": "Bentonville",
  "state": "AR",
  "zip": 72712,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b12",
  "employeeId": 19008,
  "firstName": "Makiredy",
  "lastName": "Sowmya",
  "phone": "(516) 417-6249",
  "email": "sowmyamakireddy5@gmail.com",
  "entryDate": "3/23/2022",
  "status": "Active",
  "address": "2704 SW Boilermaker Rd",
  "street": "Apt 32",
  "city": "Bentonville",
  "state": "AR",
  "zip": 72712,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b13",
  "employeeId": 19009,
  "firstName": "Madasu",
  "lastName": "Bhagyasree",
  "phone": "(845) 681-9072",
  "email": "bhagyasreemadasu@gmail.com",
  "entryDate": "3/23/2022",
  "status": "Active",
  "address": "1234 Valley Lake Drive",
  "street": "Apt 704",
  "city": "Schaumburg",
  "state": "IL",
  "zip": 60195,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b14",
  "employeeId": 19010,
  "firstName": "Satti",
  "lastName": "Saibabareddy",
  "phone": "(510) 364-4451",
  "email": "saibaba.satti@gmail.com, saibabareddysatti23@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "700 N Salem Dr",
  "street": "Apt 212",
  "city": "Hoffman Estates",
  "state": "IL",
  "zip": 60169,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b15",
  "employeeId": 19011,
  "firstName": "Devani",
  "lastName": "Kapil Lilaram",
  "phone": "(437) 688-1703",
  "email": "kapildevani.ce@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "332-25 Water Walk drive",
  "street": "Unionville",
  "city": "Ontario",
  "state": "Canada",
  "zip": "L6G 0G3",
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b16",
  "employeeId": 19012,
  "firstName": "Chitoor",
  "lastName": "Revanth",
  "phone": "(331) 588-1998",
  "email": "revanthchittoor@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "12445 Glenmeade Ct",
  "street": "Apt J",
  "city": "Maryland Heights",
  "state": "MO",
  "zip": 63043,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b17",
  "employeeId": 19013,
  "firstName": "Bodampati",
  "lastName": "Rajesh",
  "phone": "(270) 438-9696",
  "email": "bodampatirajesh@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "8551 Red Oak Ct",
  "street": "Apt F",
  "city": "Indianapolis",
  "state": "IN",
  "zip": 46227,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b18",
  "employeeId": 19014,
  "firstName": "Bolla",
  "lastName": "Bhavya",
  "phone": "(669) 238-5683",
  "email": "bhavya.bolla@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "12310 Single Tree Lane",
  "street": "Apt 2343",
  "city": "Edenprairie",
  "state": "MN",
  "zip": 55344,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b19",
  "employeeId": 19015,
  "firstName": "Chilukuri",
  "lastName": "Upendra",
  "phone": "(469) 544 9336",
  "email": "chilukuriupendra@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "MO",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b20",
  "employeeId": 19016,
  "firstName": "vemula",
  "lastName": "Manikanta Prasanth",
  "phone": "(551) 998-1499",
  "email": "manikantaprasanth124@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "MO",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b21",
  "employeeId": 19017,
  "firstName": "Yakkala",
  "lastName": "Pruthvi",
  "phone": "(276) 594-8060",
  "email": "pruthvi.stackit@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "7236 Parkridge Blvd",
  "street": "Apt 058",
  "city": "Irving",
  "state": "TX",
  "zip": 75063,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b22",
  "employeeId": 19018,
  "firstName": "Kamepalli",
  "lastName": "Prudhvi",
  "phone": "(510) 953-1836",
  "email": "prudhvi0308@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "MO",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b23",
  "employeeId": 19019,
  "firstName": "Dandamudi",
  "lastName": "Anil",
  "phone": "(925) 663 5191 & (231) 598-1850",
  "email": "anildandamudi77@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "2588 Viola Gill Ln",
  "street": "N/A",
  "city": "Grover",
  "state": "MO",
  "zip": 63040,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b24",
  "employeeId": 19020,
  "firstName": "Eadala",
  "lastName": "Bhaskar Chowdary",
  "phone": "(848) 702 1012 & (501) 952-8285",
  "email": "bhaskarchowdary592@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "1801 Champlin Dr",
  "street": "Apt 1311",
  "city": "Little Rock",
  "state": "AR",
  "zip": 72223,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b25",
  "employeeId": 19021,
  "firstName": "Soma",
  "lastName": "Harish Kumar",
  "phone": "(516) 653-8816",
  "email": "hsoma8816@gmail.com, somaharishkumar@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "2588 Viola Gill Ln",
  "city": "Grover",
  "state": "MO",
  "zip": 63040,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b26",
  "employeeId": 19022,
  "firstName": "Chandaluri",
  "lastName": "Midhun Venkata Naga Manidatta",
  "phone": "(419) 315-0606",
  "email": "midhunc999@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "1924 Sacagawea",
  "street": "Windcrest",
  "city": "San Antonio",
  "state": "TX",
  "zip": 78239,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b27",
  "employeeId": 19023,
  "firstName": "Gyandeep",
  "lastName": "Dandamudi",
  "phone": "(201) 238-7017",
  "email": "gyan.dandamudi@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "4001 Sw Modernway",
  "street": "Apt 206",
  "city": "Bentonville",
  "state": "AR",
  "zip": 72712,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b28",
  "employeeId": 19024,
  "firstName": "Yellaram",
  "lastName": "Sharath Reddy",
  "phone": "(571) 525-6181",
  "email": "sharath0878@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "IL",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b29",
  "employeeId": 19025,
  "firstName": "Salla",
  "lastName": "Vijay Kiran Reddy",
  "phone": "(804) 300-4734",
  "email": "vkiranr23@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "MO",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b30",
  "employeeId": 19026,
  "firstName": "Kunamaneni",
  "lastName": "Amulya",
  "phone": "(571) 201-7301",
  "email": "akunam880@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "8080 Eden Road",
  "street": "Apt 158",
  "city": "Eden Prairie",
  "state": "MN",
  "zip": 55344,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b31",
  "employeeId": 19027,
  "firstName": "Gandham",
  "lastName": "Shasi Teja",
  "phone": "(660) 541-2032",
  "email": "shasiteja@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "Missouri",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b32",
  "employeeId": 19028,
  "firstName": "Kommineni",
  "lastName": "Ravi Teja",
  "phone": "(682) 251-4134",
  "email": "raviteja.krt326@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "524 Savannah Circle",
  "street": "Apt 524",
  "city": "O Fallon",
  "state": "MO",
  "zip": 63368,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b33",
  "employeeId": 19029,
  "firstName": "Vanaganti",
  "lastName": "Vijayanand",
  "phone": "(312) 391-3474",
  "email": "vanagantivijayanand@gmail.com, vijay.java777@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "2840 International Dr",
  "street": "Apt 417B",
  "city": "Yspilanti",
  "state": "MI",
  "zip": 48197,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b34",
  "employeeId": 19030,
  "firstName": "Thondapu",
  "lastName": "Mounika",
  "phone": "(202) 334-6668",
  "email": "mounikathondapu136@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "MO",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b35",
  "employeeId": 19031,
  "firstName": "Kankanala",
  "lastName": "Vamshidher Reddy",
  "phone": "(415) 640-9204",
  "email": "rvamshi22@gmail.com ",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "2600 William Short Cir",
  "street": "Apt 405",
  "city": "Herndon",
  "state": "VA",
  "zip": 20171,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b36",
  "employeeId": 19032,
  "firstName": "Boosa",
  "lastName": "Vinay Kumar",
  "phone": "(510) 501-7840 \n",
  "email": "vinaybusa@outlook.com ",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "7220 MCCALLUM BLVD ",
  "street": "APT 2101",
  "city": "Dallas",
  "state": "TX",
  "zip": 75252,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b37",
  "employeeId": 19033,
  "firstName": "Karthikeyan",
  "lastName": "Divya",
  "phone": "(224) 302-3805",
  "email": "divyakarthik1191@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "971 Charlela Ln",
  "street": "Apt 101",
  "city": "Elk Grove Village",
  "state": "IL",
  "zip": 60007,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b38",
  "employeeId": 19034,
  "firstName": "Koruboyini",
  "lastName": "Shiva Rama Krishna",
  "phone": "(551) 358-5290",
  "email": "koruboyinishiva@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "886 Hillgate PL",
  "street": "N/A",
  "city": "Pittsburgh",
  "state": "PA",
  "zip": 15220,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b39",
  "employeeId": 19035,
  "firstName": "Joshi",
  "lastName": "Anvit Bhimsain",
  "phone": "(682) 331-9809",
  "email": "anvitjoshi@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "1426 Dexter Lake Dr",
  "street": "Apt 303",
  "city": "Cordova",
  "state": "TN",
  "zip": 38016,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b40",
  "employeeId": 19036,
  "firstName": "Munagala",
  "lastName": "Mounika",
  "phone": "(989) 423-5539",
  "email": "mounivij9@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "1216 E  Vista Del Cerro Dr",
  "street": "Apt 2076 N Building 28",
  "city": "Tempe",
  "state": "AZ",
  "zip": 85281,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b41",
  "employeeId": 19037,
  "firstName": "Ganesan",
  "lastName": "Anusha",
  "phone": "(425) 420-4136",
  "email": "anusha.ganesan@outlook.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "1300 E Algonquin Rd",
  "street": "Apt 1Q",
  "city": "Schaumburg",
  "state": "IL",
  "zip": 60173,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b42",
  "employeeId": 19038,
  "firstName": "Raavi",
  "lastName": "Umasankar",
  "phone": "(510) 458-9955",
  "email": "raaviumasankar@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "7563 Stoney Run Dr",
  "street": "Apt N",
  "city": "Hanover",
  "state": "MD",
  "zip": 21076,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b43",
  "employeeId": 19039,
  "firstName": "Sayed",
  "lastName": "Irfan",
  "phone": "(510) 298-6480",
  "email": "syedirfan3121@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "2429 Bear Cub Bend",
  "street": "N/A",
  "city": "Leander",
  "state": "TX",
  "zip": 78641,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b44",
  "employeeId": 19040,
  "firstName": "Adulla",
  "lastName": "Achyuth Reddy",
  "phone": "(517) 373-6979",
  "email": "achyuthreddy94@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "8113 Dumont Dr",
  "street": "Apt 203",
  "city": "Vienna",
  "state": "VA",
  "zip": 22180,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b45",
  "employeeId": 19041,
  "firstName": "Avvari",
  "lastName": "Venkata Manjusha",
  "phone": "(201) 960-0302",
  "email": "venkatamanjusha.a@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "1342 S Finley Rd",
  "street": "Apt 3T",
  "city": "Lombard",
  "state": "IL",
  "zip": 60148,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b46",
  "employeeId": 19042,
  "firstName": "Srungavarapu",
  "lastName": "Susmitha",
  "phone": "(207) 329-6144",
  "email": "sushmitansu@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "11060 Endeavor Dr",
  "street": "N/A",
  "city": "Parker",
  "state": "CO",
  "zip": 80134,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b47",
  "employeeId": 19043,
  "firstName": "Badiger",
  "lastName": "Ashwini Gangadhar",
  "phone": "(901) 910-6207",
  "email": "ashwinigbit@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "3753 N 900 West Lehi",
  "city": "Philadelthia",
  "state": "UT",
  "zip": 27560,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b48",
  "employeeId": 19044,
  "firstName": "Mohammed",
  "lastName": "Abdul Kareem Uddin",
  "phone": "(312) 626-0793",
  "email": "abdul96kareem@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "1180 State St Nw",
  "street": "N/A",
  "city": "Atlanta",
  "state": "GA",
  "zip": 30318,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b49",
  "employeeId": 19045,
  "firstName": "Shah",
  "lastName": "Kush Chirag",
  "phone": "(302) 670-8539",
  "email": "shahkush121@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "301 S Bay St",
  "street": "N/A",
  "city": "Snowhill",
  "state": "MD",
  "zip": 21863,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b50",
  "employeeId": 19046,
  "firstName": "Yadam",
  "lastName": "Siva Kumari",
  "phone": "(972) 313-5695",
  "email": "sivakumariyadam@gmail.com, sivak98766@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "3301 Farm To Market Road 3218",
  "street": "Apt 1025",
  "city": "Commerce",
  "state": "Tx",
  "zip": 75428,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b51",
  "employeeId": 19047,
  "firstName": "Jampani",
  "lastName": "Dhruva Choudhary ",
  "phone": "(201) 616-1878",
  "email": "jchoudharyd@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "576 Misty Mountain Drive",
  "city": "OFallon",
  "state": "MO",
  "zip": 63368,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b52",
  "employeeId": 19048,
  "firstName": "Kalakuntla",
  "lastName": "Sachin",
  "phone": "(571) 382-0010",
  "email": "kalakuntlasachin@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "7605 Ledford St ",
  "street": "Apt 202",
  "city": "Falls Church",
  "state": "VA",
  "zip": 22043,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b53",
  "employeeId": 19049,
  "firstName": "Nallala",
  "lastName": "Vinusha",
  "phone": "(704) 778-7190",
  "email": "vinushanalla@outlook.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b54",
  "employeeId": 19050,
  "firstName": "Janardhanan",
  "lastName": "Rahul ",
  "phone": "(224) 401-9796",
  "email": "vsmrj7@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "5446 Chesterton Palace ",
  "street": "Building No 3",
  "city": "Indianapolis",
  "state": "IN",
  "zip": 46237,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b55",
  "employeeId": 19051,
  "firstName": "Bagam",
  "lastName": "Sai Ram",
  "phone": "(814) 806-8414",
  "email": "saigolang@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "1149 Port Diane Dr",
  "street": "Apt 1149",
  "city": "Saint Louis",
  "state": "MO",
  "zip": 63146,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b56",
  "employeeId": 19052,
  "firstName": "Duriseti",
  "lastName": "Priyanka",
  "phone": "(973) 393-8438 & (630) 912-3435",
  "email": "pduriseti87@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "6401 Santa Monica Ave, NE",
  "street": "Apt 3041",
  "city": "Albuquerque",
  "state": "NM",
  "zip": 87109,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b57",
  "employeeId": 19053,
  "firstName": "Parasa",
  "lastName": "Ananta Kavya",
  "phone": "(609) 665-8217",
  "email": "anantakavya.parasa@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "225 N Columbia Dr",
  "street": "Apt 4213",
  "city": "Chicago",
  "state": "IL",
  "zip": 60601,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b58",
  "employeeId": 19054,
  "firstName": "Borra",
  "lastName": "Anvesh",
  "phone": "(512) 217-3636",
  "email": "anveshborra8@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "2735 Florin Cv",
  "street": "N/A",
  "city": "Round Rock",
  "state": "TX",
  "zip": 78665,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b59",
  "employeeId": 19055,
  "firstName": "Kandula",
  "lastName": "Murali Krishna",
  "phone": "(904) 521-2556",
  "email": "muralimk085@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "711 Cubbage St",
  "street": "Apt 11B",
  "city": "Carnegie",
  "state": "PA",
  "zip": 15106,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b60",
  "employeeId": 19056,
  "firstName": "Linga Reddy",
  "lastName": "Nikitha",
  "phone": "(571) 353-9692",
  "email": "lnikitha22@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "2433 Birch Cove Rd",
  "street": "N/A",
  "city": "Herndon",
  "state": "VA",
  "zip": 20171,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b61",
  "employeeId": 19057,
  "firstName": "Sama",
  "lastName": "Karthik Reddy",
  "phone": "(361) 228-3609",
  "email": "samakarthikreddy1996@gmail.com, karthikr0828@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "1039 Brentwood Way",
  "street": "Apt-E",
  "city": "Sandy-Springs",
  "state": "GA",
  "zip": 30350,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b62",
  "employeeId": 19058,
  "firstName": "Kodaganti",
  "lastName": "Rani",
  "phone": "(929) 328-5450",
  "email": "Kodaganti.rani@gmail.com, ranijava07@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "2350 Club Meridian Dr",
  "street": "Apt A8",
  "city": "Okemos",
  "state": "MI",
  "zip": 48864,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b63",
  "employeeId": 19059,
  "firstName": "Surosh",
  "lastName": "Arash",
  "phone": "(540) 498-2538",
  "email": "arashsurosh@googlemail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b64",
  "employeeId": 19060,
  "firstName": "Vattikuti",
  "lastName": "Lavanya",
  "phone": "(321) 978-8614",
  "email": "vattikutilavanya@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b65",
  "employeeId": 19061,
  "firstName": "Waghmode",
  "lastName": "Mayuri Pradeep",
  "phone": "(225) 900-1622",
  "email": "mayuri.waghmode3@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "5765 Bozeman Drive",
  "street": "Apt 2221",
  "city": "Plano",
  "state": "TX",
  "zip": 75024,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b66",
  "employeeId": 19062,
  "firstName": "Vanama",
  "lastName": "Harsha",
  "phone": "(512) 665-2343",
  "email": "harshavardhan.1134@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b67",
  "employeeId": 19063,
  "firstName": "Talluri",
  "lastName": "Rajiv Chandra",
  "phone": "(717) 999-3280",
  "email": "tchandra22448@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b68",
  "employeeId": 19064,
  "firstName": "Allam",
  "lastName": "Maria Dheekshit",
  "phone": "(510) 996-2793",
  "email": "mariadheekshit@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "35630 Grand River Ave",
  "street": "Apt 113",
  "city": "Farmington Hills",
  "state": "MI",
  "zip": 48335,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b69",
  "employeeId": 19065,
  "firstName": "Maragoni",
  "lastName": "Naresh",
  "phone": "(203) 666-5343",
  "email": "nareshk2sf@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "8451 Gateway Pky W",
  "street": "Apt 1246",
  "city": "Jacksonville",
  "state": "FL",
  "zip": 32216,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b70",
  "employeeId": 19066,
  "firstName": "Durrani ",
  "lastName": "Ahmed Saud Khan",
  "phone": "(314) 651-6788 & (425) 749-4206",
  "email": "askd05811@gmail.com",
  "entryDate": "3/21/2022",
  "status": "Active",
  "address": "720 Riverside Drive",
  "street": "Apt 118",
  "city": "Toledo",
  "state": "OH",
  "zip": 43605,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b71",
  "employeeId": 19067,
  "firstName": "Khan",
  "lastName": "Shahzaid",
  "phone": "(440) 319-8446",
  "email": "shahzaidkha@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "3033 Ohio Drive",
  "street": "Apt 2093",
  "city": "Frisco",
  "state": "TX",
  "zip": 75033,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b72",
  "employeeId": 19068,
  "firstName": "Kokalla",
  "lastName": "Shravan Kumar",
  "phone": "(408) 893-1553",
  "email": "kshravan246@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "1505 Tumbleweed Trl",
  "street": "N/A",
  "city": "Northlake",
  "state": "TX",
  "zip": 76226,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b73",
  "employeeId": 19069,
  "firstName": "Makani",
  "lastName": "Sai Teja",
  "phone": "(816) 255-0411",
  "email": "tejam1224@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b74",
  "employeeId": 19070,
  "firstName": "mohammed",
  "lastName": "Abdul rahman ",
  "phone": "(630) 770-4241",
  "email": "mohabdul092@gmail.com & abdulmjrahman@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "415 Colony Ct",
  "street": "Apt 415",
  "city": "Bolingbrook",
  "state": "IL",
  "zip": 60440,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b75",
  "employeeId": 19071,
  "firstName": "Maram",
  "lastName": "Abhinav Reddy",
  "phone": "(412) 979-3829",
  "email": "abhirpa0@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "383 West Fork",
  "street": "Apt 1826",
  "city": "Dallas",
  "state": "TX",
  "zip": 75039,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b76",
  "employeeId": 19072,
  "firstName": "Thota",
  "lastName": "Venkata Harish",
  "phone": "(213) 477-4866 & (737) 400-9899",
  "email": "harisht.python@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "1947 Raspberry Ct",
  "city": "Edison",
  "state": "NJ",
  "zip": 8817,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b77",
  "employeeId": 19073,
  "firstName": "Chalyam",
  "lastName": "Harsha Chari",
  "phone": "(240) 344-3697",
  "email": "harsha.gti12@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b78",
  "employeeId": 19074,
  "firstName": "Thalla",
  "lastName": "Yashwanth Reddy",
  "phone": "(409) 292-6939",
  "email": "yash.dotnetdeveloper@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b79",
  "employeeId": 19075,
  "firstName": "Bumi Reddy",
  "lastName": "Naga Gouthami",
  "phone": "(573) 202-1344",
  "email": "gouthamireddy13@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "3005 Mcmurtry St",
  "street": "N/A",
  "city": "Cumming",
  "state": "GA",
  "zip": 30041,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b80",
  "employeeId": 19076,
  "firstName": "Patel",
  "lastName": "Deepkumar Kalpeshkumar",
  "phone": "(551) 263-6595",
  "email": "deepkpatel766@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "906 Glenlake Dr",
  "street": "N/A",
  "city": "Carol Stream",
  "state": "IL",
  "zip": 60188,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b81",
  "employeeId": 19077,
  "firstName": "Guduru",
  "lastName": "Yogasree",
  "phone": "(440) 650-8785",
  "email": "yogasree465@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b82",
  "employeeId": 19078,
  "firstName": "Pam",
  "lastName": "Rotella",
  "phone": "N/A",
  "email": "N/A",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b83",
  "employeeId": 19079,
  "firstName": "Syed",
  "lastName": "Zaheer",
  "phone": "(773) 290-3384",
  "email": "syedzaheerdev@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "1775 W Highland Ave ",
  "street": "Apt 101",
  "city": "Chicago",
  "state": "IL",
  "zip": 60660,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b84",
  "employeeId": 19080,
  "firstName": "Maganti",
  "lastName": "Srikanth",
  "phone": "(972) 988-9911",
  "email": "kanth.maganti@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b85",
  "employeeId": 19081,
  "firstName": "Parvataneni",
  "lastName": "Pradeep",
  "phone": "(412) 867-0208",
  "email": "pdeepu62@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b86",
  "employeeId": 19082,
  "firstName": "Kowkuntla",
  "lastName": "Venkat",
  "phone": "8247663680, (847) 406-0283",
  "email": "vkowkuntla@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "N/A",
  "street": "N/A",
  "city": "N/A",
  "state": "N/A",
  "zip": "N/A",
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b87",
  "employeeId": 19083,
  "firstName": "Ahmed",
  "lastName": "Rafeeq",
  "phone": "(872) 235-9659",
  "email": "AhmedRafeeq5@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "7301 North ridge blvd",
  "street": "Apt 204",
  "city": "Chicago",
  "state": "IL",
  "zip": 60645,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b88",
  "employeeId": 19084,
  "firstName": "Putta",
  "lastName": "Suresh",
  "phone": "(312) 451-7034",
  "email": "sputta.java@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b89",
  "employeeId": 19085,
  "firstName": "Chukkapalli",
  "lastName": "Aravind Sai Kumar ",
  "phone": "(913) 203-9082",
  "email": "aravind.net99@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "1890 N 115th PLZ",
  "street": "N/A",
  "city": "Omaha",
  "state": "NE",
  "zip": 68154,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b90",
  "employeeId": 19086,
  "firstName": "Vemula",
  "lastName": "Manikanta Prashanth",
  "phone": "(551) 998-1499",
  "email": "manikantawork1@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "4 east st",
  "street": "Apt 3",
  "city": "Jersey City",
  "state": "NJ",
  "zip": 7306,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b91",
  "employeeId": 19087,
  "firstName": "Gali",
  "lastName": "SaiKrisna",
  "phone": "(224) 349-2658",
  "email": "saieeagali@gmail.com",
  "entryDate": "3/24/2022",
  "status": "Active",
  "address": "0374 Old olive street rd",
  "street": "Apt 220",
  "city": "Saint Louis",
  "state": "MO",
  "zip": "63141-5919",
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b92",
  "employeeId": 19088,
  "firstName": "Mohsen",
  "lastName": "Rameesha",
  "phone": "(860) 468-5811",
  "email": "rameesha.sn.10@gmail.com",
  "entryDate": "9/9/2022",
  "status": "Active",
  "address": "13733 Brunswick Ave S",
  "city": "Savage",
  "state": "MN",
  "zip": 55378,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b93",
  "employeeId": 19089,
  "firstName": "Vanamala",
  "lastName": "Rakesh",
  "phone": {
    "$numberLong": "7760274120"
  },
  "email": "rakeshvanamala@gmail.com",
  "entryDate": "9/9/2022",
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b94",
  "employeeId": 19090,
  "firstName": "Sanapala",
  "lastName": "Ravi Kumar",
  "phone": "(201) 341-7392",
  "email": "sravee2k@gmail.com",
  "entryDate": "9/9/2022",
  "status": "Active",
  "address": "25 Cherokee Trl",
  "city": "Denville",
  "state": "NJ",
  "zip": 7834,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b95",
  "employeeId": 19091,
  "firstName": "Punugula",
  "lastName": "Naveen Kumar",
  "phone": "(978) 489-8012",
  "email": "naveen.punugula@gmail.com",
  "entryDate": "9/9/2022",
  "status": "Active",
  "address": "30 Golfview Drive",
  "street": "Apt C2",
  "city": "Newark",
  "state": "DE",
  "zip": 19702,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b96",
  "employeeId": 19092,
  "firstName": "Mataparthy",
  "lastName": "Kartheek",
  "phone": "(210) 213-0494",
  "email": "kartheek473@gmail.com",
  "entryDate": "9/9/2022",
  "status": "Active",
  "address": "13010 Ridgeline Blvd",
  "street": "Apt 4109",
  "city": "Cedar Park",
  "state": "TX",
  "zip": 78613,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b97",
  "employeeId": 19093,
  "firstName": "Sambaraju",
  "lastName": "Rajani",
  "phone": "(614) 245-9550",
  "email": "rajisam009@gmail.com",
  "entryDate": "9/9/2022",
  "status": "Active",
  "address": "5446 Chesterton Place",
  "street": "Building 3",
  "city": "Indianapolis",
  "state": "IN",
  "zip": 46237,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b99",
  "employeeId": 19095,
  "firstName": "Teegala",
  "lastName": "Mohan",
  "phone": "(407) 922-6630",
  "email": "teegalamohan@gmail.com",
  "entryDate": "9/9/2022",
  "status": "Active",
  "address": "3011 N 15th Street",
  "city": "Sheboygan",
  "state": "WI",
  "zip": 53083,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b100",
  "employeeId": 19096,
  "firstName": "Mohammed",
  "lastName": "Aftaab",
  "phone": "(510) 935-2118",
  "email": "mdaftaabsiddiqui@gmail.com",
  "entryDate": "9/9/2022",
  "status": "Active",
  "address": "6400 N. Ridge Blvd",
  "street": "Apt 406",
  "city": "Chicago",
  "state": "IL",
  "zip": 60626,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b101",
  "employeeId": 19097,
  "firstName": "Makwana",
  "lastName": "Vatshal",
  "phone": "(510) 766-5993",
  "email": "vatshal6875@gmail.com",
  "entryDate": "9/9/2022",
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b102",
  "employeeId": 19098,
  "firstName": "Madugula",
  "lastName": "Preethi",
  "phone": "(210) 305-3645",
  "email": "preethi.madugula09@gmail.com",
  "entryDate": "4/10/2022",
  "status": "Active",
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b103",
  "employeeId": 19099,
  "firstName": "Yadam",
  "lastName": "Siva Chandu",
  "phone": "(701) 321-8481",
  "email": "chanduworkmail4@gmail.com",
  "entryDate": "4/10/2023",
  "status": "Active",
  "address": "3102 4th Street, W-182",
  "city": "Lubbock",
  "state": "TX",
  "zip": 79415,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b104",
  "employeeId": 19100,
  "firstName": "Cheruku",
  "lastName": "Thriveni",
  "phone": "(510) 512-8337",
  "email": "thrivenireddy.ch@gmail.com",
  "entryDate": "4/10/2023",
  "status": "Active",
  "address": "27729 Kingsgate Way",
  "street": "Apt 1",
  "city": "Farmington Hills",
  "state": "MI",
  "zip": 48334,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b105",
  "employeeId": 19101,
  "firstName": "Koyyada",
  "lastName": "Ravikanth Goud",
  "phone": "(551) 242-7926",
  "email": "ravikanthkd@gmail.com",
  "entryDate": "4/10/2023",
  "status": "Active",
  "address": "100 Clifton Place",
  "street": "Apt 605",
  "city": "Jersey City",
  "state": "NJ",
  "zip": 7304,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b106",
  "employeeId": 19102,
  "firstName": "Pingili",
  "lastName": "Rajashekhar Reddy",
  "phone": "(571) 524-5533",
  "email": "Rajashekhar.reddy2205@gmail.com",
  "entryDate": "4/10/2023",
  "status": "Active",
  "address": "13455 Sunrise Valley Dr",
  "street": "Apt 5022",
  "city": "Herndon",
  "state": "VA",
  "zip": 20171,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b107",
  "employeeId": 19103,
  "firstName": "Masadi",
  "lastName": "Vamshi",
  "phone": "(470) 403-0915",
  "email": "vamshimasad8@gmail.com",
  "entryDate": "4/10/2023",
  "status": "Active",
  "address": "Lincoln Ln",
  "street": "Apt B7",
  "city": "Dayton",
  "state": "NJ",
  "zip": 8810,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b108",
  "employeeId": 19104,
  "firstName": "Kumar",
  "lastName": "Vijay",
  "phone": "(732) 762-0976",
  "email": "Vijay.akash@gmail.com",
  "entryDate": "4/10/2023",
  "status": "Active",
  "address": "48 Eugene",
  "city": "Montville",
  "state": "NJ",
  "zip": 7045,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b109",
  "employeeId": 19105,
  "firstName": "Shankar",
  "lastName": "Mayank",
  "phone": "(929) 255-7993",
  "email": "mayank.shankar@nyu.edu",
  "entryDate": "4/10/2023",
  "status": "Active",
  "address": "54 Noll St",
  "street": "Apt 737",
  "city": "Brooklyn",
  "state": "NY",
  "zip": 11206,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b110",
  "employeeId": 19106,
  "firstName": "Prantik",
  "lastName": "Ishrak Imam",
  "phone": "(484) 905-4033",
  "email": "ishrak.i.p@gmail.com",
  "entryDate": "4/10/2023",
  "status": "Active",
  "address": "11 Dexter St",
  "street": "11-1",
  "city": "Medford",
  "state": "MA",
  "zip": 2155,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b111",
  "employeeId": 19107,
  "firstName": "Chennaiahgari",
  "lastName": "Srikanth Reddy",
  "phone": "(682) 358-5909",
  "email": "chskreddy12@gmail.com",
  "entryDate": "4/10/2023",
  "status": "Active",
  "address": "6935 Deseo Drive",
  "city": "Irving",
  "state": "TX",
  "zip": 75039,
  "createdAt": {
    "$date": "2023-11-29T21:59:11.193Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b112",
  "employeeId": 19108,
  "firstName": "Megharaj",
  "lastName": "Ram",
  "phone": "(510) 371-3132",
  "email": "ramegharaj2@gmail.com",
  "entryDate": "08/23/2023",
  "status": "Active",
  "address": "12913 Tradd St,",
  "street": "Apt 2C",
  "city": "Carmel",
  "state": "IN",
  "zip": 46032,
  "createdAt": {
    "$date": "2023-12-01T15:49:50.287Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b113",
  "employeeId": 19109,
  "firstName": "Mathulapuram",
  "lastName": "vinodkumar",
  "phone": "(945) 268-9364 ",
  "email": "vinodkumarm064@gmail.com",
  "entryDate": "08/23/2023",
  "status": "Active",
  "address": "4725 N O Connor Rd",
  "street": "Apt 2046",
  "city": "Irving",
  "state": "TX",
  "zip": 75062,
  "createdAt": {
    "$date": "2023-11-29T18:57:22.880Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": "656a009e759f7568e84b83b114",
  "employeeId": 19110,
  "firstName": "Bachu",
  "lastName": "Venkata Ratnam",
  "phone": "(659) 233-9032",
  "email": "ratnabachu@gmail.com",
  "entryDate": "08/23/2023",
  "status": "Active",
  "address": "364 Merry Oaks Dr",
  "city": "Sycamore",
  "state": "IL",
  "zip": 60178,
  "createdAt": {
    "$date": "2023-11-29T19:10:03.542Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T13:49:29.705Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "65737d13ad719b9ab7b22577"
  },
  "employeeId": "100012",
  "firstName": "AA",
  "lastName": "PATTABHI",
  "phone": null,
  "email": "bro@gmail.com",
  "entryDate": "2023-12-01",
  "status": "ACTIVE",
  "address": "anilkuma",
  "street": null,
  "city": null,
  "state": null,
  "zip": null,
  "createdAt": {
    "$date": "2023-12-08T20:31:15.753Z"
  },
  "updatedAt": {
    "$date": "2023-12-08T20:31:43.178Z"
  },
  "__v": 0
}]

mock.onGet('/api/datatables/initial-data').reply(() => {
  return [200, data]
})

mock.onGet('/api/datatables/data').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1 } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.filter(
    item =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      item.full_name.toLowerCase().includes(queryLowered) ||
      item.post.toLowerCase().includes(queryLowered) ||
      item.email.toLowerCase().includes(queryLowered) ||
      item.age.toLowerCase().includes(queryLowered) ||
      item.salary.toLowerCase().includes(queryLowered) ||
      item.start_date.toLowerCase().includes(queryLowered)
  )
  /* eslint-enable  */

  return [
    200,
    {
      allData: data,
      invoices: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})
