
$(document).ready(function() {


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      async function wait() {
        await sleep(1500);
    }
      
    wait().then(function(){
        var water_points = {
            draw: function(){
                var location_001={lat: 31.848090, lng:  -104.354066} 
                var point_001 = new google.maps.Marker({
                    position: location_001,
                    title: "MF117471V Section 14 Block 61 T2, T&P "
                });
                point_001.setMap(map);             
                
                 var location_002={lat: 31.848003, lng: -104.336278} 
                 var point_002 = new google.maps.Marker({
                     position: location_002,
                     title: "MF117471V Section 14 Block 61 T2, T&P "
                 });
                 point_002.setMap(map); 

                 var location_003={lat: 31.833010, lng:-104.336386}  
                 var point_003 = new google.maps.Marker({
                     position: location_003,
                     title: "MF117471V Section 14 Block 61 T2, T&P "
                 });
                 point_003.setMap(map); 
                
                 var location_004={lat: 31.833060, lng:-104.354120}  
                 var point_004 = new google.maps.Marker({
                     position: location_004,
                     title: "MF117471V Section 14 Block 61 T2, T&P "
                });
                 point_004.setMap(map); 
                
                var location_005={lat: 31.685787, lng:-104.228538}

                var point_005 = new google.maps.Marker({
                    position: location_005,
                    title: "MF120230 Section 11 Abstract 6414"
                });
                point_005.setMap(map); 
                
                var location_006={lat: 31.685806, lng:-104.219210}

                var point_006 = new google.maps.Marker({
                    position: location_006,
                    title: "MF120230 Section 11 Abstract 6414"
                });
                point_006.setMap(map); 
                
                var location_007={lat: 31.671416, lng:-104.219210}

                var point_007 = new google.maps.Marker({
                    position: location_007,
                    title: "MF120230 Section 11 Abstract 6414"
                });
                point_007.setMap(map); 
                
                var location_008={lat: 31.671398, lng:-104.228324}

                var point_008 = new google.maps.Marker({
                    position: location_008,
                    title: "MF120230 Section 11 Abstract 6414"
                });
                point_008.setMap(map); 

                
                var location_009={lat: 31.685787, lng:-104.237056}

                var point_009 = new google.maps.Marker({
                    position: location_009,
                    title: "MF120230 Section 11 Abstract 6415"
                });
                point_009.setMap(map); 

                
                var location_010={lat: 31.685751, lng:-104.228538}

                var point_010 = new google.maps.Marker({
                    position: location_010,
                    title: "MF120230 Section 11 Abstract 6415"
                });
                point_010.setMap(map); 


                var location_011={lat: 31.671343, lng:-104.228388}

                var point_011 = new google.maps.Marker({
                    position: location_011,
                    title: "MF120230 Section 11 Abstract 6415"
                });
                point_011.setMap(map); 
                
                var location_012={lat: 31.671379, lng:-104.236864}

                var point_012 = new google.maps.Marker({
                    position: location_012,
                    title: "MF120230 Section 11 Abstract 6415"
                });
                point_012.setMap(map);
				
				
				var location_013={lat: 31.671397, lng:-104.236872}
                var point_013 = new google.maps.Marker({
                    position: location_013,
                    title: "MF120230 Section 14 Abstract 6412"
                });
                point_013.setMap(map);
				var location_014={lat: 31.671401, lng: -104.228386}
                var point_014 = new google.maps.Marker({
                    position: location_014,
                    title: "MF120230 Section 14 Abstract 6412"
                });
                point_014.setMap(map);
				var location_015={lat: 31.656952, lng:-104.228198}
                var point_015 = new google.maps.Marker({
                    position: location_013,
                    title: "MF120230 Section 14 Abstract 6412"
                });
                point_015.setMap(map);
				var location_016={lat: 31.656975, lng:-104.236690}
                var point_016 = new google.maps.Marker({
                    position: location_015,
                    title: "MF120230 Section 14 Abstract 6412"
                });
				point_016.setMap(map);
				
				var location_017={lat:31.671356 , lng:-104.228363}
                var point_017 = new google.maps.Marker({
                    position: location_017,
                    title: "MF120230 Section 14  Abstract 6410"
                });
                point_017.setMap(map);
				var location_018={lat: 31.671347, lng:-104.219309}
                var point_018 = new google.maps.Marker({
                    position: location_018,
                    title: "MF120230Section 14  Abstract 6410"
                });
                point_018.setMap(map);
				var location_019={lat: 31.656882, lng:-104.219282,}
                var point_019 = new google.maps.Marker({
                    position: location_019,
                    title: "MF120230 Section 14  Abstract 6410"
                });
                point_019.setMap(map);
				var location_020={lat: 31.656937, lng:-104.228154}
                var point_020 = new google.maps.Marker({
                    position: location_020,
                    title: "MF120230 Section 14  Abstract 6410"
                });
                point_020.setMap(map);
				
				var location_021={lat: 31.700339, lng:-104.237233}
                var point_021 = new google.maps.Marker({
                    position: location_021,
                    title: "MF120243 Section 2, Abstract 6379"
                });
                point_021.setMap(map);
				var location_022={lat: 31.700336, lng:-104.219295}
                var point_022 = new google.maps.Marker({
                    position: location_022,
                    title: "MF120243 Section 2, Abstract 6379"
                });
                point_022.setMap(map);
				var location_023={lat: 31.685887, lng:-104.218566}
                var point_023 = new google.maps.Marker({
                    position: location_023,
                    title: "MF120243 Section 2, Abstract 6379"
                });
                point_023.setMap(map);
				var location_024={lat: 31.685888, lng:-104.237040}
                var point_024 = new google.maps.Marker({
                    position: location_024,
                    title: "MF120243 Section 2, Abstract 6379"
                });
                point_023.setMap(map);
				
				var location_025={lat: 31.700330, lng:-104.254184}
                var point_025 = new google.maps.Marker({
                    position: location_025,
                    title: "MF120243 Section 3, Abstract 6423"
                });
                point_025.setMap(map);
				var location_026={lat: 31.700257, lng:-104.236397}
                var point_026 = new google.maps.Marker({
                    position: location_026,
                    title: "MF120243 Section 3, Abstract 6423"
                });
                point_026.setMap(map);
				var location_027={lat: 31.685869, lng:-104.236357}
                var point_027 = new google.maps.Marker({
                    position: location_027,
                    title: "MF120243 Section 3, Abstract 6423"
                });
                point_027.setMap(map);
				var location_028={lat: 31.685851, lng:-104.254099}
                var point_028 = new google.maps.Marker({
                    position: location_028,
                    title: "MF120243 Section 3, Abstract 6423"
                });
                point_028.setMap(map);
				
				var location_029={lat: 31.675031, lng:-104.253913}
                var point_029 = new google.maps.Marker({
                    position: location_029,
                    title: "MF120243 Section 10, Abstract 4421"
                });
                point_029.setMap(map);
				var location_030={lat: 31.675022, lng:-104.236350}
                var point_030 = new google.maps.Marker({
                    position: location_030,
                    title: "MF120243 Section 10, Abstract 4421"
                });
                point_030.setMap(map);
				var location_031={lat: 31.671406, lng:-104.236350}
                var point_031 = new google.maps.Marker({
                    position: location_031,
                    title: "MF120243 Section 10, Abstract 4421"
                });
                point_031.setMap(map);
				var location_032={lat: 31.671434, lng:-104.253870}
                var point_032 = new google.maps.Marker({
                    position: location_032,
                    title: "MF120243 Section 10, Abstract 4421"
                });
                point_032.setMap(map);
				
				var location_033={lat: 31.685804, lng:-104.254094}
                var point_033 = new google.maps.Marker({
                    position: location_033,
                    title: "MF120243 Section 10 Abstract 1543"
                });
                point_033.setMap(map);
				var location_034={lat: 31.685786, lng:-104.236349}
                var point_034 = new google.maps.Marker({
                    position: location_034,
                    title: "MF120243 Section 10 Abstract 1543"
                });
                point_034.setMap(map);
				var location_035={lat: 31.675103, lng:-104.236345}
                var point_035 = new google.maps.Marker({
                    position: location_035,
                    title: "MF120243 Section 10 Abstract 1543"
                });
                point_035.setMap(map);
				var location_036={lat: 31.675139, lng:-104.253890}
                var point_036 = new google.maps.Marker({
                    position: location_036,
                    title: "MF120243 Section 10 Abstract 1543"
                });
                point_036.setMap(map);
				
				var location_037={lat: 31.671307, lng:-104.253879}
                var point_037 = new google.maps.Marker({
                    position: location_037,
                    title: "MF120243 Section 15 Abstract 6409"
                });
                point_037.setMap(map);
				var location_038={lat: 31.671306, lng:-104.236327}
                var point_038 = new google.maps.Marker({
                    position: location_038,
                    title: "MF120243 Section 15 Abstract 6409"
                });
                point_038.setMap(map);
				var location_039={lat: 31.656933, lng:-104.236327}
                var point_039 = new google.maps.Marker({
                    position: location_039,
                    title: "MF120243 Section 15 Abstract 6409"
                });
                point_039.setMap(map);
				var location_040={lat: 31.656951, lng:-104.253729}
                var point_040 = new google.maps.Marker({
                    position: location_040,
                    title: "MF120243 Section 15 Abstract 6409"
                });
                point_040.setMap(map);
				
				var location_041={lat: 31.671325, lng:-104.270851}
                var point_041 = new google.maps.Marker({
                    position: location_041,
                    title: "MF120243 Section 16 Abstract 6408"
                });
                point_041.setMap(map);
				var location_042={lat:  31.671325, lng:-104.253364}
                var point_042 = new google.maps.Marker({
                    position: location_042,
                    title: "MF120243 Section 16 Abstract 6408"
                });
                point_042.setMap(map);
				var location_043={lat: 31.656969, lng:-104.253364}
                var point_043 = new google.maps.Marker({
                    position: location_043,
                    title: "MF120243 Section 16 Abstract 6408"
                });
                point_043.setMap(map);
				var location_044={lat: 31.656969, lng:-104.270851}
                var point_044 = new google.maps.Marker({
                    position: location_044,
                    title: "MF120243 Section 16 Abstract 6408"
                });
                point_044.setMap(map);
				
				
				var location_045={lat: 31.671307, lng:-104.287845}
                var point_045 = new google.maps.Marker({
                    position: location_045,
                    title: "MF120243 Section 17 Abstract 6407"
                });
                point_045.setMap(map);
				var location_046={lat: 31.671307, lng:-104.270315}
                var point_046 = new google.maps.Marker({
                    position: location_046,
                    title: "MF120243 Section 17 Abstract 6407"
                });
                point_046.setMap(map);
				var location_047={lat:  31.656951, lng:-104.270315}
                var point_047 = new google.maps.Marker({
                    position: location_047,
                    title: "MF120243 Section 17 Abstract 6407"
                });
                point_047.setMap(map);
				var location_048={lat: 31.656951, lng:-104.287845}
                var point_048 = new google.maps.Marker({
                    position: location_048,
                    title: "MF120243 Section 17 Abstract 6407"
                });
                point_048.setMap(map);
				
				var roll_Line01=[location_001, location_002, location_003, location_004, location_001];
				var roll_Line02=[location_005, location_006, location_007, location_008, location_005];
				var roll_Line03=[location_009, location_010, location_011, location_012, location_009];
				var roll_Line04=[location_013, location_014, location_015, location_016, location_013];
				var roll_Line05=[location_017, location_018, location_019, location_020, location_017];
				var roll_Line06=[location_021, location_022, location_023, location_024, location_021];
				var roll_Line07=[location_025, location_026, location_027, location_028, location_025];
				var roll_Line08=[location_029, location_030, location_031, location_032, location_029];
				var roll_Line09=[location_033, location_034, location_035, location_036, location_033];
				var roll_Line10=[location_037, location_038, location_039, location_040, location_037];
				var roll_Line11=[location_041, location_042, location_043, location_044, location_041];
				var roll_Line12=[location_045, location_046, location_047, location_048, location_045];
				
				var line01 = new google.maps.Polyline({
                    path: roll_Line01,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line01.setMap(map);
				  
				var line02 = new google.maps.Polyline({
                    path: roll_Line02,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line02.setMap(map);
				  
				var line03 = new google.maps.Polyline({
                    path: roll_Line03,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line03.setMap(map);
				  
				var line04 = new google.maps.Polyline({
                    path: roll_Line04,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line04.setMap(map);
				  
				var line05 = new google.maps.Polyline({
                    path: roll_Line05,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line05.setMap(map);
				  
				var line06 = new google.maps.Polyline({
                    path: roll_Line06,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line06.setMap(map);
				  
				var line07 = new google.maps.Polyline({
                    path: roll_Line07,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line07.setMap(map);
				  
				var line08 = new google.maps.Polyline({
                    path: roll_Line08,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line08.setMap(map);
				  
				var line09 = new google.maps.Polyline({
                    path: roll_Line09,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line09.setMap(map);
				  
				var line10 = new google.maps.Polyline({
                    path: roll_Line10,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line10.setMap(map);
				  
				var line11 = new google.maps.Polyline({
                    path: roll_Line11,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line11.setMap(map);
				var line12 = new google.maps.Polyline({
                    path: roll_Line12,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line12.setMap(map);
            } 
        }
        water_points.draw();

        // var original_parcel={
        //     draw: function(){
        //         var nw_point_AWilliams_885={lat:32.714343,lng:-98.083526};
        //         var nw_point_AWilliams_886={lat:32.693530,lng:-98.099981};
        //         var startpoint=geolib.computeDestinationPoint(nw_point_AWilliams_886, 1330.147, 180);
        //         var con_start={lat:startpoint.latitude,lng:startpoint.longitude};
        //         var start_loc = new google.maps.Marker({
        //             position: con_start,
        //             title: "start of old property 4364ft south of Williams, A 886 NW point lat:32.693530,lng:-98.099981"
        //         });
        //         start_loc.setMap(map);

        //         var loc_2_raw=geolib.computeDestinationPoint(con_start, 915.0096, 179.75);
        //         var loc_2={lat:loc_2_raw.latitude,lng:loc_2_raw.longitude};
        //         var loc_2_marker = new google.maps.Marker({
        //             position: loc_2,
        //             title: "South 0-1/4 degree east, 3002ft to NW corner of Church and cemetary"
        //         });
        //         loc_2_marker.setMap(map);

        //         var loc_3_raw=geolib.computeDestinationPoint(loc_2, 64.008, 90);
        //         var loc_3={lat:loc_3_raw.latitude,lng:loc_3_raw.longitude};
        //         var loc_3_marker = new google.maps.Marker({
        //             position: loc_3,
        //             title: "East 210 feet to the NE corner of said lot"
        //         });
        //         loc_3_marker.setMap(map);

        //         var loc_4_raw=geolib.computeDestinationPoint(loc_3, 358.14, 180);
        //         var loc_4={lat:loc_4_raw.latitude,lng:loc_4_raw.longitude};
        //         var loc_4_marker = new google.maps.Marker({
        //             position: loc_4,
        //             title: "South with the east line of the Church lot 1175 feet to the north line of T&PRR"
        //         });
        //         loc_4_marker.setMap(map); 


        //         var loc_5_raw=geolib.computeDestinationPoint(loc_4, 64.008, 270);
        //         var loc_5={lat:loc_5_raw.latitude,lng:loc_5_raw.longitude};
        //         var loc_5_marker = new google.maps.Marker({
        //             position: loc_5,
        //             title: "West 210 feet bact to the west line of said survey"
        //         });
        //         loc_5_marker.setMap(map); 

        //         var loc_6_raw=geolib.computeDestinationPoint(loc_4, 2884.018, 179.75);
        //         var loc_6={lat:loc_6_raw.latitude,lng:loc_6_raw.longitude};
        //         var loc_6_marker = new google.maps.Marker({
        //             position: loc_6,
        //             title: "South 0-1/4 degrees east with said west line 9462 feet to the lower bank of Brazos river oppisite the shouth of Palo Pinto Creek"
        //         });
        //         loc_6_marker.setMap(map); 


        //         //start error correction marker Brazos river bank
        //         var loc_7_raw={latitude:32.641600, longitude:-98.099708};
        //         var loc_7={lat:32.641600, lng:-98.099708};
        //         var loc_7_marker = new google.maps.Marker({
        //             position: loc_7,
        //             title: "ERRORS NOT ORIGINAL SURVEY: extention to actual brazos river bank by sattelite view"
        //         });
        //         //loc_7_marker.setMap(map); 
        //         //end error correction marker 
        //         var error1=geolib.getPathLength([loc_6_raw, loc_7_raw]);
        //         console.log("the first error correction is "+error1+" meters");

        //         var loc_8_raw=geolib.computeDestinationPoint(loc_6, 457.2, 135);
        //         var loc_8={lat:loc_8_raw.latitude,lng:loc_8_raw.longitude};
        //         var loc_8_marker = new google.maps.Marker({
        //             position: loc_8,
        //             title: "with meanders of lower bank of Brazos S 45 E 1500 feet"
        //         });
        //         loc_8_marker.setMap(map); 

        //         var loc_9_raw=geolib.computeDestinationPoint(loc_8, 548.64, 130.5);
        //         var loc_9={lat:loc_9_raw.latitude,lng:loc_9_raw.longitude};
        //         var loc_9_marker = new google.maps.Marker({
        //             position: loc_9,
        //             title: "S 50 1/2 E 1800 feet"
        //         });
        //         loc_9_marker.setMap(map); 

        //         var loc_10_raw=geolib.computeDestinationPoint(loc_9, 426.72, 122);
        //         var loc_10={lat:loc_10_raw.latitude,lng:loc_10_raw.longitude};
        //         var loc_10_marker = new google.maps.Marker({
        //             position: loc_10,
        //             title: "S 58 E 1400 feet"
        //         });
        //         loc_10_marker.setMap(map); 

        //         var loc_11_raw=geolib.computeDestinationPoint(loc_10, 457.2, 109.75);
        //         var loc_11={lat:loc_11_raw.latitude,lng:loc_11_raw.longitude};
        //         var loc_11_marker = new google.maps.Marker({
        //             position: loc_11,
        //             title: "S 70 1/4 E 1500 feet"
        //         });
        //         loc_11_marker.setMap(map); 

        //         var loc_12_raw=geolib.computeDestinationPoint(loc_11, 304.8, 90);
        //         var loc_12={lat:loc_12_raw.latitude, lng:loc_12_raw.longitude};
        //         var loc_12_marker = new google.maps.Marker({
        //             position: loc_12,
        //             title: "E 1000 feet"
        //         });
        //         loc_12_marker.setMap(map); 

        //         var loc_13_raw=geolib.computeDestinationPoint(loc_12, 316.992, 54.5);
        //         var loc_13={lat:loc_13_raw.latitude, lng:loc_13_raw.longitude};
        //         var loc_13_marker = new google.maps.Marker({
        //             position: loc_13,
        //             title: "N 54 1/2 E 1040 feet"
        //         });
        //         loc_13_marker.setMap(map); 

        //         var loc_14_raw=geolib.computeDestinationPoint(loc_13, 441.96, 30.5);
        //         var loc_14={lat:loc_14_raw.latitude, lng:loc_14_raw.longitude};
        //         var loc_14_marker = new google.maps.Marker({
        //             position: loc_14,
        //             title: "N 30 1/2 east 1450 feet"
        //         });
        //         loc_14_marker.setMap(map); 

        //         var loc_15_raw=geolib.computeDestinationPoint(loc_14, 152.4, 357);
        //         var loc_15={lat:loc_15_raw.latitude, lng:loc_15_raw.longitude};
        //         var loc_15_marker = new google.maps.Marker({
        //             position: loc_15,
        //             title: "N 3 W 500 feet"
        //         });
        //         loc_15_marker.setMap(map); 

        //         var loc_16_raw=geolib.computeDestinationPoint(loc_15, 1524, 320);
        //         var loc_16={lat:loc_16_raw.latitude, lng:loc_16_raw.longitude};
        //         var loc_16_marker = new google.maps.Marker({
        //             position: loc_16,
        //             title: "N 40 W 5000 feet"
        //         });
        //         loc_16_marker.setMap(map); 

        //         var loc_17_raw=geolib.computeDestinationPoint(loc_16, 121.92, 13);
        //         var loc_17={lat:loc_17_raw.latitude, lng:loc_17_raw.longitude};
        //         var loc_17_marker = new google.maps.Marker({
        //             position: loc_17,
        //             title: "N 13 E 400 feet"
        //         });
        //         loc_17_marker.setMap(map); 

        //         var loc_18_raw=geolib.computeDestinationPoint(loc_17, 274.32, 27.25);
        //         var loc_18={lat:loc_18_raw.latitude, lng:loc_18_raw.longitude};
        //         var loc_18_marker = new google.maps.Marker({
        //             position: loc_18,
        //             title: "N 27 1/4 E 900 feet"
        //         });
        //         loc_18_marker.setMap(map); 

        //         var loc_19_raw=geolib.computeDestinationPoint(loc_18, 804.672, 34.5);
        //         var loc_19={lat:loc_19_raw.latitude, lng:loc_19_raw.longitude};
        //         var loc_19_marker = new google.maps.Marker({
        //             position: loc_19,
        //             title: "N 34.5 E 2640 feet"
        //         });
        //         loc_19_marker.setMap(map); 

        //         var loc_20_raw=geolib.computeDestinationPoint(loc_19, 313.944, 43.5);
        //         var loc_20={lat:loc_20_raw.latitude, lng:loc_20_raw.longitude};
        //         var loc_20_marker = new google.maps.Marker({
        //             position: loc_20,
        //             title: "N 43.5 E 1030 feet"
        //         });
        //         loc_20_marker.setMap(map); 

        //         var loc_21_raw=geolib.computeDestinationPoint(loc_20, 944.88, 39.25);
        //         var loc_21={lat:loc_21_raw.latitude, lng:loc_21_raw.longitude};
        //         var loc_21_marker = new google.maps.Marker({
        //             position: loc_21,
        //             title: "N 39.25 E 3100 feet"
        //         });
        //         loc_21_marker.setMap(map); 

        //         var loc_22_raw=geolib.computeDestinationPoint(loc_21, 512.064, 32.25);
        //         var loc_22={lat:loc_22_raw.latitude, lng:loc_22_raw.longitude};
        //         var loc_22_marker = new google.maps.Marker({
        //             position: loc_22,
        //             title: "N 32.25 E 1680 feet, to an old northery subdivision marked line at river bank"
        //         });
        //         loc_22_marker.setMap(map); 

        //         var loc_23_raw=geolib.computeDestinationPoint(loc_22, 1758.696, 24.5);
        //         var loc_23={lat:loc_23_raw.latitude, lng:loc_23_raw.longitude};
        //         var loc_23_marker = new google.maps.Marker({
        //             position: loc_23,
        //             title: "N 24.5 E 5770 feet, to SE corner of JH Gilbert lands out of said East Willams survey"
        //         });
        //         loc_23_marker.setMap(map); 

        //         var loc_24_raw=geolib.computeDestinationPoint(loc_23, 1758.696, 24.5);
        //         var loc_24={lat:loc_24_raw.latitude, lng:loc_24_raw.longitude};
        //         var loc_24_marker = new google.maps.Marker({
        //             position: loc_24,
        //             title: "With Gilbert's south line "
        //         });
        //         loc_24_marker.setMap(map);



        //         var roll_LineCoord=[con_start, loc_2, loc_3, loc_4, loc_5, loc_6, loc_8, loc_9, loc_10, loc_11, loc_12, loc_13, loc_14, loc_15, loc_16, loc_17, loc_18, loc_19, loc_20, loc_21, loc_22, loc_23];
        //         console.log(roll_LineCoord);
        //         var original_parcel_line = new google.maps.Polyline({
        //             path: roll_LineCoord,
        //             geodesic: true,
        //             strokeColor: '#0000FF',
        //             strokeOpacity: .7,
        //             strokeWeight: 1
        //           });
        //           original_parcel_line.setMap(map);

        //     }
        // }
        // original_parcel.draw();


        // var parcel_2017={
        //     draw: function(){
        //         console.log("in 2017 parcel method")
        //     }
        // }
        // parcel_2017.draw();

    });
    


});