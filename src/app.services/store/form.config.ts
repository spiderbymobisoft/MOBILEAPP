import { Injectable } from '@angular/core';

@Injectable()
export class FormConfig {

    public siteCondition = [
        {
            id: 0, text: 'Completed'
        },
        {
            id: 1, text: 'Abadoned'
        }, {
            id: 2, text: 'Demolished'
        }, {
            id: 3, text: 'Not Developed'
        }, {
            id: 4, text: 'Open Space'
        }, {
            id: 5, text: 'Playground'
        }, {
            id: 6, text: 'Under Construction'
        }
    ];

    public buildingType = [
      {
            id: 11, text: 'Agricultural'
        },{
            id: 17, text: 'Civic'
        },{
            id: 18, text: 'Residential'
        },{
            id: 19, text: 'Commercial'
        },{
            id: 20, text: 'Government'
        },{
            id: 21, text: 'Military/Security'
        },{
            id: 22, text: 'Religious'
        },{
            id: 24, text: 'Undesignated'
        }
    ];


    public waterSupply = [
        {
            id: 1, text: 'Well (undrinkable)'
        }, {
            id: 2, text: 'Borehole (drinkable)'
        }, {
            id: 3, text: 'Borehole (undrinkable)'
        }, {
            id: 4, text: 'Government supply'
        }, {
            id: 5, text: 'Private supply'
        }, {
            id: 6, text: 'None'
        }
    ];

    public refuseDisposal = [
        {
            id: 1, text: 'Government'
        },
        {
            id: 2, text: 'PPP'
        }, {
            id: 3, text: 'Unauthorized Dump'
        }, {
            id: 4, text: 'Private Collector'
        }, {
            id: 5, text: 'None '
        }
    ];

    public meterCondition = [
        {
            id: 1, text: 'Working Meter'
        }, {
            id: 2, text: 'Bad Meter'
        }, {
            id: 3, text: 'No Meter'
        }
    ];

    public meterPhases = [
        {
            id: 1, text: 'Single Phase'
        }, {
            id: 2, text: 'Dual Phase'
        }, {
            id: 3, text: 'Tripple Phase'
        }, {
            id: 4, text: 'None'
        }
    ];

    public meterType = [
        {
            id: 1, text: 'Analogue Meter'
        }, {
            id: 2, text: 'Digital Meter'
        }, {
            id: 3, text: 'None'
        }
    ];


    public typeOfOwner = [
        {
            id: 1, text: 'LGA'
        }, {
            id: 2, text: 'State'
        }, {
            id: 3, text: 'Federal'
        }, {
            id: 4, text: 'Trado-Medical'
        }, {
            id: 5, text: 'Business'
        }, {
            id: 6, text: 'Individual'
        }, {
            id: 7, text: 'Religious'
        }
    ];

    MedicalServices = [
        {
            id: 1, text: 'ART: Anti Retroviral Therapy'
        }, {
            id: 2, text: 'General'
        }, {
            id: 3, text: 'HIV/AIDS'
        }, {
            id: 4, text: 'HTC: HIV Counseling and Testing'
        }, {
            id: 5, text: 'Immunization'
        }, {
            id: 6, text: 'Maternal and Child Health'
        }, {
            id: 7, text: 'Marternity'
        }, {
            id: 8, text: 'O&G'
        }, {
            id: 9, text: 'Paedeatics'
        }, {
            id: 10, text: 'Pathology'
        }, {
            id: 11, text: 'PMTCT: Prevention of Mother to Child Transmission of HIV'
        }, {
            id: 12, text: 'Pyschiatry'
        }, {
            id: 13, text: 'Tuberculosis'
        }
    ];

    public partnershipPrograms = [
        {
            id: 1, text: 'BHIS: Community Based Health Insurance Scheme'
        }, {
            id: 2, text: 'CCT: Conditional Cash Transfer'
        }, {
            id: 3, text: 'FMOH: Federal Ministry of health'
        }, {
            id: 4, text: 'MDG: Millennium Development Goals'
        }, {
            id: 5, text: 'NPHCDA: National Primary Health Care Development Agency'
        }, {
            id: 6, text: 'UN: United Nations'
        }, {
            id: 7, text: 'USG: United State Government'
        }
    ];

    public toiletType = [
        {
            id: 1, text: 'Water Closet'
        }, {
            id: 2, text: 'Pit Latrine'
        }, {
            id: 3, text: 'None'
        }
    ];


    public buildingFacilities = [
        {
            id: 1, text: 'Laboratory'
        }, {
            id: 2, text: 'Library'
        }, {
            id: 3, text: 'Playing Ground'
        }, {
            id: 4, text: 'Staff Room'
        }, {
            id: 5, text: 'Bar'
        }, {
            id: 6, text: 'Laundry'
        }, {
            id: 7, text: 'Multi-purpose Hall'
        }, {
            id: 8, text: 'Restuarant'
        }, {
            id: 9, text: 'Swimming Pool',
        }, {
            id: 10, text: 'Wifi'
        }, {
            id: 11, text: 'Cafe'
        }, {
            id: 12, text: 'None'
        }
    ];


    public facilityType = [
        {
            id: 1, text: 'Primary'
        }, {
            id: 2, text: 'Secondary'
        }, {
            id: 3, text: 'Tertiary'
        }, {
            id: 4, text: 'Alternative'
        }
    ];

    public streetFurniture = [
        {
            id: 1, text: 'Street Lamps'
        }, {
            id: 2, text: 'Traffic Light'
        }, {
            id: 3, text: 'Litter Bin'
        }, {
            id: 4, text: 'Monument'
        }, {
            id: 5, text: 'Bus Stop'
        }, {
            id: 6, text: 'None'
        }
    ];


    public entityGroup = [
        {
            title: 'Agricultural Product',
            sub_titles: [
                {
                    "title": "Agricultural Chemical"
                },
                {
                    "title": "Agro Chemicals"
                },
                {
                    "title": "Agricultural Chemical, Tools, Equipment and Products"
                },
                {
                    "title": "Agricultural Products"
                },
                {
                    "title": "Agricultural Tools and Equipment"
                },
                {
                    "title": "Farm Implemets and Tools"
                },
                {
                    "title": "Fish Depot"
                },
                {
                    "title": "Fish Farm"
                },
                {
                    "title": "Seed and Seedlings"
                }
            ]
        },
        {
            title: 'Associations/Club/Unions/NGO',
            sub_titles: [
                {
                    "title": "Administration Office"
                },
                {
                    "title": "Association Office"
                },
                {
                    "title": "Charity"
                },
                {
                    "title": "Club House"
                },
                {
                    "title": "COMMUNITY ASSOCIATIONS"
                },
                {
                    "title": "CO-OPERATIVE SOCIETIES"
                },
                {
                    "title": "ECOWAS"
                },
                {
                    "title": "Foundations"
                },
                {
                    "title": "IMF"
                },
                {
                    "title": "Liaison Office"
                },
                {
                    "title": "Orphanages"
                },
                {
                    "title": "RED CROSS & RED CRESCENT"
                },
                {
                    "title": "Training Centre"
                },
                {
                    "title": "UNESCO"
                },
                {
                    "title": "UNICEF"
                },
                {
                    "title": "Union Office"
                },
                {
                    "title": "United Nations"
                },
                {
                    "title": "WHO"
                },
                {
                    "title": "World Health"
                }
            ]
        },
        {
            title: 'Education',
            sub_titles: [
                {
                    "title": "Catering School"
                },
                {
                    "title": "College of Education"
                },
                {
                    "title": "Computer Networking and Training and Services"
                },
                {
                    "title": "Computer School"
                },
                {
                    "title": "Computer Training Sales and Engineering Service"
                },
                {
                    "title": "Creche"
                },
                {
                    "title": "Creche with Nursery & Primary School"
                },
                {
                    "title": "Group of Schools"
                },
                {
                    "title": "Institute for Professionals"
                },
                {
                    "title": "Junior & Senior Secondary"
                },
                {
                    "title": "Junior Secondary School"
                },
                {
                    "title": "Kindergarten"
                },
                {
                    "title": "Language Learning Centre"
                },
                {
                    "title": "Library"
                },
                {
                    "title": "Music School"
                },
                {
                    "title": "Nursery & Primary School"
                },
                {
                    "title": "Nursery School"
                },
                {
                    "title": "Polytechnic"
                },
                {
                    "title": "Primary School"
                },
                {
                    "title": "School for Adult Education"
                },
                {
                    "title": "School for Special Students"
                },
                {
                    "title": "School of Nursing"
                },
                {
                    "title": "School of Technology"
                },
                {
                    "title": "Seminary & Theological School"
                },
                {
                    "title": "Senior Secondary School"
                },
                {
                    "title": "Technical College"
                },
                {
                    "title": "Technologies School"
                },
                {
                    "title": "Tutorial School"
                },
                {
                    "title": "University"
                },
                {
                    "title": "University Teaching Hospital"
                }
            ]
        },
        {
            title: 'Entertainment',
            sub_titles: [
                {
                    "title": "Cinema"
                },
                {
                    "title": "Art Works"
                },
                {
                    "title": "Audio Visual and Multimedia Studio"
                },
                {
                    "title": "Body Fitness"
                },
                {
                    "title": "Booking Office for Musicians"
                },
                {
                    "title": "Broadcasting(Tv/Radio) Stations"
                },
                {
                    "title": "Event Coverage"
                },
                {
                    "title": "Film Production"
                },
                {
                    "title": "Film/Video Sales Shop"
                },
                {
                    "title": "Games Arcade"
                },
                {
                    "title": "Lithographers"
                },
                {
                    "title": "Magazine"
                },
                {
                    "title": "Media House"
                },
                {
                    "title": "Monograms"
                },
                {
                    "title": "Music Promoters and Film/Video Sales Shop"
                },
                {
                    "title": "Music Studio"
                },
                {
                    "title": "Musical Instruments Rentals"
                },
                {
                    "title": "Musical Instruments Sales"
                },
                {
                    "title": "Musical Instruments Sales and Rentals"
                },
                {
                    "title": "Musical Instruments Training Centre"
                },
                {
                    "title": "Musicians"
                },
                {
                    "title": "News Papers"
                },
                {
                    "title": "Night Club"
                },
                {
                    "title": "Photo and Video Equipments Shop"
                },
                {
                    "title": "Photo Laboratory"
                },
                {
                    "title": "Photographic Materials Dealers"
                },
                {
                    "title": "Presenters (Tv/Radio)"
                },
                {
                    "title": "Publishing Firms"
                },
                {
                    "title": "Radio Station"
                },
                {
                    "title": "Recording Studio"
                },
                {
                    "title": "Sport Wear/ Material Shops"
                },
                {
                    "title": "Video Rentals"
                },
                {
                    "title": "Viewing Enter"
                }
            ]
        },
        {
            title: 'Financial Institution',
            sub_titles: [
                {
                    "title": "Banks"
                },
                {
                    "title": "Brokers"
                },
                {
                    "title": "Bureau De Change"
                },
                {
                    "title": "Central Bank"
                },
                {
                    "title": "Finance Company"
                },
                {
                    "title": "Insurance"
                },
                {
                    "title": "Insurance Brokers"
                },
                {
                    "title": "Micro Finance Bank"
                },
                {
                    "title": "Money Lenders"
                },
                {
                    "title": "Mortgage Banks"
                },
                {
                    "title": "Pension"
                },
                {
                    "title": "Savings and Loan Company"
                },
                {
                    "title": "Stock Broker"
                },
                {
                    "title": "Stock Exchange Office"
                }
            ]
        },
        {
            title: 'Food and Beverage',
            sub_titles: [
                {
                    "title": "Beverages Supplier    "
                },
                {
                    "title": "Beer Deport"
                },
                {
                    "title": "Food Items Store"
                },
                {
                    "title": "Noodles Foods"
                },
                {
                    "title": "Packaging Food and Drinks"
                },
                {
                    "title": "Wine Produce"
                }
            ]
        },
        {
            title: 'Government Establishment',
            sub_titles: [
                {
                    "title": "3-3days Market"
                },
                {
                    "title": "5-5days Market"
                },
                {
                    "title": "Agencies"
                },
                {
                    "title": "Authority"
                },
                {
                    "title": "Banquet Hall"
                },
                {
                    "title": "Boards"
                },
                {
                    "title": "Cemetery"
                },
                {
                    "title": "Commission"
                },
                {
                    "title": "Court of Appeal"
                },
                {
                    "title": "Court of Arbitration"
                },
                {
                    "title": "Custom Office"
                },
                {
                    "title": "Customary Court"
                },
                {
                    "title": "Fed. Parastatals"
                },
                {
                    "title": "Food storage"
                },
                {
                    "title": "Government House"
                },
                {
                    "title": "Govt. Institute"
                },
                {
                    "title": "High Court"
                },
                {
                    "title": "Immigration"
                },
                {
                    "title": "Industrial Court"
                },
                {
                    "title": "JAMB"
                },
                {
                    "title": "Judiciary Court"
                },
                {
                    "title": "L.G.A"
                },
                {
                    "title": "Liaison Office"
                },
                {
                    "title": "Magistrate Court"
                },
                {
                    "title": "Main Market"
                },
                {
                    "title": "Ministry"
                },
                {
                    "title": "NECO"
                },
                {
                    "title": "Night Market"
                },
                {
                    "title": "Post Office"
                },
                {
                    "title": "Prison"
                },
                {
                    "title": "Radio Station"
                },
                {
                    "title": "Research Agency"
                },
                {
                    "title": "Residence"
                },
                {
                    "title": "Secretariat"
                },
                {
                    "title": "Sharia Court"
                },
                {
                    "title": "State Parastatal"
                },
                {
                    "title": "Sunday's Market"
                },
                {
                    "title": "Supreme Court"
                },
                {
                    "title": "Tribunal"
                },
                {
                    "title": "TV Station"
                },
                {
                    "title": "WAEC"
                }
            ]
        },
        {
            title: 'Hospitality',
            sub_titles: [
                {
                    "title": "Bar"
                },
                {
                    "title": "Cafeteria"
                },
                {
                    "title": "Events & Multi-purpose Halls"
                },
                {
                    "title": "Fast Food"
                },
                {
                    "title": "Guest House"
                },
                {
                    "title": "Hotel & Suites / Motel / Hotel"
                },
                {
                    "title": "Inn"
                },
                {
                    "title": "Mama Put"
                },
                {
                    "title": "Party Rentals"
                },
                {
                    "title": "Restaurant"
                }
            ]
        },
        {
            title: 'Medical',
            sub_titles: [
                {
                    "title": "Chemist/Provision Stores"
                },
                {
                    "title": "Clinic"
                },
                {
                    "title": "Dental Clinic"
                },
                {
                    "title": "Federal Medical Centre"
                },
                {
                    "title": "General Hospital"
                },
                {
                    "title": "Health Care Services"
                },
                {
                    "title": "Hospital"
                },
                {
                    "title": "Maternity Home"
                },
                {
                    "title": "Medical and Scientific Equipment Supplies"
                },
                {
                    "title": "Medical Laboratory/Diagnostic Enter"
                },
                {
                    "title": "Midwifery"
                },
                {
                    "title": "Mortuary"
                },
                {
                    "title": "Optician"
                },
                {
                    "title": "Optometry"
                },
                {
                    "title": "Orthopaedic Hospital"
                },
                {
                    "title": "Patent Medicine Store"
                },
                {
                    "title": "Pharmacy"
                },
                {
                    "title": "Physiotherapist"
                },
                {
                    "title": "Primary Healthcare Enter"
                },
                {
                    "title": "Psychiatric Clinic"
                },
                {
                    "title": "Sale of Medical Equipment"
                },
                {
                    "title": "School of Nursing and Midwife"
                },
                {
                    "title": "Traditional Herb Medicine and Naturalist Health Care Centre"
                },
                {
                    "title": "Tradomedical/Herbal Clinic"
                },
                {
                    "title": "University Teaching Hospital"
                },
                {
                    "title": "Veterinary Clinic"
                },
                {
                    "title": "Veterinary Shop"
                }
            ]
        },
        {
            title: 'Manufacturing Company',
            sub_titles: [
                {
                    "title": "Aluminium Works Company"
                },
                {
                    "title": "Block Industry"
                },
                {
                    "title": "Foam Manufacturers"
                },
                {
                    "title": "Furniture and Wood Works Sales"
                },
                {
                    "title": "Glass Manufacturing Companies"
                },
                {
                    "title": "Ice Block Making Machine"
                },
                {
                    "title": "Industrial Rubbers Manufacturers and Supplies"
                },
                {
                    "title": "Metal Tools and Supply"
                },
                {
                    "title": "Paint Manufacturers"
                },
                {
                    "title": "Plastic Furniture Companies"
                },
                {
                    "title": "Plastic Manufacturers"
                },
                {
                    "title": "Polythene Manufacturers"
                },
                {
                    "title": "Pure and Table Water Companies"
                },
                {
                    "title": "Recycling (Inorganic)"
                },
                {
                    "title": "Recycling (Organic)"
                },
                {
                    "title": "Soap Manufacturers"
                },
                {
                    "title": "Steel and Metal Fabrication and Construction"
                },
                {
                    "title": "Tissue Paper Manufacturers"
                },
                {
                    "title": "Wire and Cable Manufacturing Company"
                }
            ]
        },
        {
            title: 'Military',
            sub_titles: [
                {
                    "title": "Barracks / Base / Cantonment"
                },
                {
                    "title": "Cantonment"
                },
                {
                    "title": "Games Village"
                },
                {
                    "title": "Legion"
                },
                {
                    "title": "Nigerian Air Force"
                },
                {
                    "title": "Nigerian Army"
                },
                {
                    "title": "Nigerian Navy"
                },
                {
                    "title": "Officers Mess"
                },
                {
                    "title": "School"
                }
            ]
        },
        {
            title: 'Mining',
            sub_titles: [
                {
                    "title": "Gold Smith"
                },
                {
                    "title": "Miners and Precious Stone Specialist"
                },
                {
                    "title": "Quarry Companies"
                }
            ]
        },
        {
            title: 'Oil and Gas',
            sub_titles: [
                {
                    "title": "Flow Station"
                },
                {
                    "title": "Gas Station"
                },
                {
                    "title": "Gas Suppliers"
                },
                {
                    "title": "Oil Companies"
                },
                {
                    "title": "Oil Depot"
                },
                {
                    "title": "Oil Mill (Engine Oil)"
                },
                {
                    "title": "Oil Pipeline"
                },
                {
                    "title": "Oil Stores (Vegetable Oil)"
                },
                {
                    "title": "Petrol Station"
                },
                {
                    "title": "Tank Farm"
                }
            ]
        },
        {
            title: 'Paramilitary',
            sub_titles: [
                {
                    "title": "Area Police Station"
                },
                {
                    "title": "CID"
                },
                {
                    "title": "Civil Defence"
                },
                {
                    "title": "Customs"
                },
                {
                    "title": "Divisional Police Station"
                },
                {
                    "title": "FRSC"
                },
                {
                    "title": "Immigration"
                },
                {
                    "title": "Man 'O War"
                },
                {
                    "title": "Police Barracks"
                },
                {
                    "title": "Police College"
                },
                {
                    "title": "Police Hq"
                },
                {
                    "title": "Police Post"
                },
                {
                    "title": "Police Station"
                },
                {
                    "title": "Security Guard Service"
                },
                {
                    "title": "SSS"
                }
            ]
        },
        {
            title: 'Pharmaceuticals and Allied Chemicals',
            sub_titles: [
                {
                    "title": "Chemical Companies"
                },
                {
                    "title": "Chemical Stores"
                },
                {
                    "title": "Pharmaceutical Company"
                }
            ]
        },
        {
            title: 'Place of Worship',
            sub_titles: [
                {
                    "title": "Church"
                },
                {
                    "title": "Christian Society"
                },
                {
                    "title": "Christian Development and Counselling Centre"
                },
                {
                    "title": "Christian Drama Ministries"
                },
                {
                    "title": "Christian Guest House"
                },
                {
                    "title": "Christian Organisations"
                },
                {
                    "title": "Christian Bookshop"
                },
                {
                    "title": "Church Cemetery"
                },
                {
                    "title": "Church+cemetery"
                },
                {
                    "title": "Church Mission"
                },
                {
                    "title": "Mixed(Church Hospital)"
                },
                {
                    "title": "Mixed(Church+hospital+shop)"
                },
                {
                    "title": "Mixed(Church+school)"
                },
                {
                    "title": "Mixed(Church+shop)"
                },
                {
                    "title": "Mixed(Church+warehouse)"
                },
                {
                    "title": "Mixed(Mosque+school)"
                },
                {
                    "title": "Mixed(Mosque+shop)"
                },
                {
                    "title": "Mosque"
                },
                {
                    "title": "Muslim Burial Ground"
                },
                {
                    "title": "Muslim Praying Ground"
                },
                {
                    "title": "Muslim Society"
                },
                {
                    "title": "Traditional"
                }
            ]
        },
        {
            title: 'Political',
            sub_titles: [
                {
                    "title": "Campaign Office"
                },
                {
                    "title": "Party Secretariat"
                },
                {
                    "title": "Senatorial Office"
                },
                {
                    "title": "Zonally office"
                }
            ]
        },
        {
            title: 'Professionals',
            sub_titles: [
                {
                    "title": "Accountant"
                },
                {
                    "title": "Architect"
                },
                {
                    "title": "Auditor"
                },
                {
                    "title": "Civil Engineer"
                },
                {
                    "title": "Civil Engineering"
                },
                {
                    "title": "Electrical Engineer"
                },
                {
                    "title": "Estate Surveyor"
                },
                {
                    "title": "Housing Agent"
                },
                {
                    "title": "Land and Estate Surveyors"
                },
                {
                    "title": "Law Firms and Legal Practitioners"
                },
                {
                    "title": "Mechanical Engineer"
                },
                {
                    "title": "Professional Body/Institute"
                },
                {
                    "title": "Quantity Surveyor"
                },
                {
                    "title": "Real Estate Valuers and Property Management Consultant"
                },
                {
                    "title": "Solar Electrical Power Technologies"
                },
                {
                    "title": "Telecommunication Equipment Engineer"
                },
                {
                    "title": "Travel Agency"
                },
                {
                    "title": "Web Designers"
                }
            ]
        },
        {
            title: 'Recreation and Tourist Attraction',
            sub_titles: [
                {
                    "title": "Amusement Park"
                },
                {
                    "title": "Art Gallery"
                },
                {
                    "title": "Caves"
                },
                {
                    "title": "Cultural Enter"
                },
                {
                    "title": "Forest Reserve"
                },
                {
                    "title": "Gardens"
                },
                {
                    "title": "Gymnasium"
                },
                {
                    "title": "Monumental Buildings"
                },
                {
                    "title": "Mountains"
                },
                {
                    "title": "Museum"
                },
                {
                    "title": "Museums"
                },
                {
                    "title": "Parks"
                },
                {
                    "title": "River"
                },
                {
                    "title": "Sports Enter"
                },
                {
                    "title": "Spring"
                },
                {
                    "title": "Stadium"
                },
                {
                    "title": "Swimming Pool"
                },
                {
                    "title": "Water Fall"
                },
                {
                    "title": "World Heritage Site"
                },
                {
                    "title": "Zoo"
                }
            ]
        },
        {
            title: 'Residential',
            sub_titles: [
                {
                    "title": "1 Bedroom Apartment"
                 },
                 {
                    "title": "2 Bedroom Apartment"
                 },
                 {
                    "title": "3 Bedroom Apartment"
                 },
                 {
                    "title": "4 Bedroom Apartment"
                 },
                 {
                    "title": "5 Bedroom Apartment"
                 },
                 {
                    "title": "6 Bedroom Apartment"
                 },
                 {
                    "title": "7 Bedroom Apartment"
                 },
                 {
                    "title": "1 Bedroom Block of Flats"
                 },
                 {
                    "title": "2 Bedroom Block of Flats"
                 },
                 {
                    "title": "3 Bedroom Block of Flats"
                 },
                 {
                    "title": "4 Bedroom Block of Flats"
                 },
                 {
                    "title": "5 Bedroom Block of Flats"
                 },
                 {
                    "title": "6 Bedroom Block of Flats"
                 },
                 {
                    "title": "7 Bedroom Block of Flats"
                 },
                 {
                    "title": "1 storey Building 2 flats"
                 },
                 {
                    "title": "1 storey Building 4 flats"
                 },
                 {
                    "title": "1 storey Building 6 flats"
                 },
                 {
                    "title": "1 storey Building 8 flats"
                 },
                 {
                    "title": "Brothel"
                 },
                 {
                    "title": "Mini Estate"
                 },
                 {
                    "title": "Mixed (Church + Hospital)"
                 },
                 {
                    "title": "Mixed (Church + School)"
                 },
                 {
                    "title": "Mixed (Church + Shop)"
                 },
                 {
                    "title": "Mixed (Church + Warehouse)"
                 },
                 {
                    "title": "Mixed (Hospital + Shop)"
                 },
                 {
                    "title": "Mixed (Mosque + School)"
                 },
                 {
                    "title": "Mixed (Mosque + Shop)"
                 },
                 {
                    "title": "Mixed (Mud + Shop)"
                 },
                 {
                    "title": "Mixed (Residential + Church + Hospital)"
                 },
                 {
                    "title": "Mixed (Residential + Church + School)"
                 },
                 {
                    "title": "Mixed (Residential + Church)"
                 },
                 {
                    "title": "Mixed (Residential + Hospital + Shop)"
                 },
                 {
                    "title": "Mixed (Residential + Hospital)"
                 },
                 {
                    "title": "Mixed (Residential + Mosque + Hospital)"
                 },
                 {
                    "title": "Mixed (Residential + Mosque + School)"
                 },
                 {
                    "title": "Mixed (Residential + Mosque)"
                 },
                 {
                    "title": "Mixed (Residential + School)"
                 },
                 {
                    "title": "Mixed (Residential + Shop)"
                 },
                 {
                    "title": "Mixed (Residential + Offices)"
                 },
                 {
                    "title": "Office Use"
                 },
                 {
                    "title": "Residence only"
                 },
                 {
                    "title": "Staff Quarters"
                 },
                 {
                    "title": "Student Hostel"
                 }
            ]
        },
        {
            title: 'Services Organization',
            sub_titles: [
                {
                    "title": "Ambulance Rentals"
                },
                {
                    "title": "Aquarium Centres"
                },
                {
                    "title": "Auctioneers"
                },
                {
                    "title": "Building Contractors"
                },
                {
                    "title": "Car Hire"
                },
                {
                    "title": "Consultancy Services"
                },
                {
                    "title": "Construction Companies"
                },
                {
                    "title": "Cooling Van Rentals"
                },
                {
                    "title": "Education Consult Services"
                },
                {
                    "title": "Entertainers and Marriage Engagement (Mc)"
                },
                {
                    "title": "Environmental Services"
                },
                {
                    "title": "Funeral Service/Undertakers"
                },
                {
                    "title": "Geospatial Services"
                },
                {
                    "title": "Graphic Printing Consultants"
                },
                {
                    "title": "Horticultural / Environmental Consults"
                },
                {
                    "title": "Human Capital Development Company"
                },
                {
                    "title": "Industrial Machine Sales and Services"
                },
                {
                    "title": "Industrial Weighing Scale and Instruments Repairs"
                },
                {
                    "title": "Information Technology Training and Service Centre"
                },
                {
                    "title": "Knitting Works and Services"
                },
                {
                    "title": "Land Scraping Services"
                },
                {
                    "title": "Marketing Companies"
                },
                {
                    "title": "Mortgage and Housing Support Services"
                },
                {
                    "title": "Organic Research and Development Centres"
                },
                {
                    "title": "Packaging Companies"
                },
                {
                    "title": "Pest Control and Fumigation"
                },
                {
                    "title": "Pilgrimage Operation Services Hajj Specialist"
                },
                {
                    "title": "Property Developers"
                },
                {
                    "title": "Refuse Contractors"
                },
                {
                    "title": "Security Vehicle Services"
                },
                {
                    "title": "Travel Agency"
                },
                {
                    "title": "Town Planners Consultants"
                },
                {
                    "title": "Water Analyst and Borehole Drilling Survey"
                },
                {
                    "title": "Weeding Consultants"
                }
            ]
        },
        {
            title: 'Skills',
            sub_titles: [
                {
                    "title": "Auto Mobile Electrician(Rewire)"
                },
                {
                    "title": "Auto Mobile Painters"
                },
                {
                    "title": "Auto Mobile Technician (Mechanic)"
                },
                {
                    "title": "Fuel Pumps and Petrol Station Pumps Repairs"
                },
                {
                    "title": "Generator Repairs and Services"
                },
                {
                    "title": "Glass Work"
                },
                {
                    "title": "House Painters"
                },
                {
                    "title": "Marble"
                },
                {
                    "title": "Mobile Phone Clinic (GSM Mechanic)"
                },
                {
                    "title": "Motor Injectors Services"
                },
                {
                    "title": "Panel Beaters"
                },
                {
                    "title": "Petrol and Diesel Pumps Engineer"
                },
                {
                    "title": "Refrigerator and Air Conditioner Services"
                }
            ]
        },
        {
            title: 'Small Business',
            sub_titles: [
                {
                    "title": "Aluminium Workshop"
                },
                {
                    "title": "Art Workshop/Studio"
                },
                {
                    "title": "Auto Mart/Car Dealer"
                },
                {
                    "title": "Baby Cloth (Baby Care)"
                },
                {
                    "title": "Bakery"
                },
                {
                    "title": "Barbing Saloon"
                },
                {
                    "title": "Battery Charger and Repairs"
                },
                {
                    "title": "Bean Powder for Akara and Moinmoin"
                },
                {
                    "title": "Beauticians"
                },
                {
                    "title": "Beauty Parlour/Spa/Cosmetics"
                },
                {
                    "title": "Bookshop"
                },
                {
                    "title": "Bore Drilling"
                },
                {
                    "title": "Borehole Water Seller"
                },
                {
                    "title": "Boutique"
                },
                {
                    "title": "Bricklayers"
                },
                {
                    "title": "Bridal Wears and Wedding Materials"
                },
                {
                    "title": "Broadcasting Equipments"
                },
                {
                    "title": "Building Materials"
                },
                {
                    "title": "Building Materials"
                },
                {
                    "title": "Business Centre"
                },
                {
                    "title": "Car Wash"
                },
                {
                    "title": "Carpenter Shop"
                },
                {
                    "title": "Catering"
                },
                {
                    "title": "Cement"
                },
                {
                    "title": "Cement Suppliers"
                },
                {
                    "title": "Cleaning Services"
                },
                {
                    "title": "Cobbler"
                },
                {
                    "title": "Cold Room/Frozen Food Seller"
                },
                {
                    "title": "Compact Disc(Cd) Sales"
                },
                {
                    "title": "Company"
                },
                {
                    "title": "Confectioneries Company"
                },
                {
                    "title": "Cotton Material Store"
                },
                {
                    "title": "Courier Express Service"
                },
                {
                    "title": "Cybercafé"
                },
                {
                    "title": "Dog Pound"
                },
                {
                    "title": "Dry Cleaner"
                },
                {
                    "title": "Ds Tv Office"
                },
                {
                    "title": "Earth Moving Equipment Dealer"
                },
                {
                    "title": "Electrical Fittings/Electronic Repair Shop"
                },
                {
                    "title": "Electronics/Computer & Phone Accessories"
                },
                {
                    "title": "Employment Agent"
                },
                {
                    "title": "Event and Party Planners"
                },
                {
                    "title": "Events Decorating/Interior"
                },
                {
                    "title": "Factory"
                },
                {
                    "title": "Farms"
                },
                {
                    "title": "Feed Mill"
                },
                {
                    "title": "Foam Depot"
                },
                {
                    "title": "Freezer"
                },
                {
                    "title": "Furniture Maker"
                },
                {
                    "title": "Furniture Shop/Showroom"
                },
                {
                    "title": "Gas Seller/Refill"
                },
                {
                    "title": "Generator Part Dealer"
                },
                {
                    "title": "Generator Sales Companies and Shop"
                },
                {
                    "title": "Gold and Jewellery Store"
                },
                {
                    "title": "Hairdressing Saloon"
                },
                {
                    "title": "Herbal"
                },
                {
                    "title": "Horticulturist/Florist"
                },
                {
                    "title": "Ice Block Seller"
                },
                {
                    "title": "Importers and Exporters General Merchants"
                },
                {
                    "title": "Iron Rod Seller"
                },
                {
                    "title": "Islamic Materials"
                },
                {
                    "title": "Kerosene Pressure Stove Distributors"
                },
                {
                    "title": "Kiddies Item and Boutique"
                },
                {
                    "title": "Kids & Toy Store"
                },
                {
                    "title": "Kiosk/Container"
                },
                {
                    "title": "Kitchen Wares & Gift Items"
                },
                {
                    "title": "Livestock"
                },
                {
                    "title": "Machines Tools"
                },
                {
                    "title": "Marble and Tiles Sales"
                },
                {
                    "title": "Mattress Dealers"
                },
                {
                    "title": "Mattress Stores"
                },
                {
                    "title": "Mechanic Heavy Duty"
                },
                {
                    "title": "Mechanic Small/Okada"
                },
                {
                    "title": "Mechanic Workshop/Village"
                },
                {
                    "title": "Motorcycle Dealers"
                },
                {
                    "title": "Multi-purpose Hall/Event Centre"
                },
                {
                    "title": "Industrial Generator Sales and Services"
                },
                {
                    "title": "Office Equipments Sales and Repairs"
                },
                {
                    "title": "Paint Depot"
                },
                {
                    "title": "Paint Distributors and Sales Stores"
                },
                {
                    "title": "Paper and Printing Material Stores"
                },
                {
                    "title": "Party Rental Services"
                },
                {
                    "title": "Perfume Store"
                },
                {
                    "title": "Photography/Video Coverage"
                },
                {
                    "title": "Plank Market"
                },
                {
                    "title": "Plank Seller and Supplies"
                },
                {
                    "title": "Plank Sellers"
                },
                {
                    "title": "Plumbing Fittings/Materials"
                },
                {
                    "title": "Plumbing Workshop"
                },
                {
                    "title": "Plywood Seller"
                },
                {
                    "title": "Polythene"
                },
                {
                    "title": "Poultry"
                },
                {
                    "title": "Printing Digital Coloured Separation"
                },
                {
                    "title": "Printing Press"
                },
                {
                    "title": "Provision Stores/Food Stuff"
                },
                {
                    "title": "Public Toilet"
                },
                {
                    "title": "Roofing Sheets Depot"
                },
                {
                    "title": "Sand "
                },
                {
                    "title": "Saw Mill"
                },
                {
                    "title": "Security Doors and Equipment"
                },
                {
                    "title": "Shopping Complex"
                },
                {
                    "title": "Shops"
                },
                {
                    "title": "Soft Drinks Depot/Pure/T Able Water"
                },
                {
                    "title": "Soft Ware Developer"
                },
                {
                    "title": "Spare Parts Seller (Cars/Okada/Small Gen)"
                },
                {
                    "title": "Spare Parts Seller (Heavy Duty)"
                },
                {
                    "title": "Street Market"
                },
                {
                    "title": "Supermarket"
                },
                {
                    "title": "Tailoring Shop"
                },
                {
                    "title": "Technical Tool & Equipment"
                },
                {
                    "title": "Textile Materials Dealers"
                },
                {
                    "title": "Tie and Dye Store"
                },
                {
                    "title": "Tv Station"
                },
                {
                    "title": "Tyre Dealer"
                },
                {
                    "title": "Tyre Protector Dealer"
                },
                {
                    "title": "Tyre Seller"
                },
                {
                    "title": "Upholstery/Canopy Makers"
                },
                {
                    "title": "Vulcanizer"
                },
                {
                    "title": "Warehouse"
                },
                {
                    "title": "Water Purification Materials"
                },
                {
                    "title": "Welding/Iron Bender Workshop"
                },
                {
                    "title": "Wine Stores"
                },
                {
                    "title": "Wrist Watches and Eyes Fashion Glass"
                }
            ]
        },
        {
            title: 'Transportation',
            sub_titles: [
                {
                    "title": "Administration Office"
                },
                {
                    "title": "Airport"
                },
                {
                    "title": "Aviation College"
                },
                {
                    "title": "Bus Stop"
                },
                {
                    "title": "Garage"
                },
                {
                    "title": "Public Toilet"
                },
                {
                    "title": "Seaport"
                },
                {
                    "title": "Shipping Agent"
                },
                {
                    "title": "Taxi Park"
                },
                {
                    "title": "Trailer Park(Haulage)"
                },
                {
                    "title": "Train Station"
                },
                {
                    "title": "Transportation Companies"
                },
                {
                    "title": "Travel and Tours"
                }
            ]
        },
        {
            title: 'Utility',
            sub_titles: [
                {
                    "title": "Electricity (11KV) Poles"
                },
                {
                    "title": "Fire Safety and Extinguisher Specialist"
                },
                {
                    "title": "Fire station"
                },
                {
                    "title": "NITEL"
                },
                {
                    "title": "PHCN"
                },
                {
                    "title": "Sub Station"
                },
                {
                    "title": "Transformer"
                },
                {
                    "title": "Water Works/Corporation"
                },
                {
                    "title": "Telecommunication Mast"
                }
            ]
        }
    ];

    public drainage = [
        'Good (Concrete)', 'Damaged (Concrete)', 'No Drainage', 'Earth'
    ];

    public roadCondition = [
        'Good', 'Bad',  'Fair', 'Under Construction', 'Abandoned Construction'
    ];

    public roadSurface = [
        'Tarred', 'Laterite', 'Not Tarred', 'Paved'
    ];

    public roadCarriage = [
        'Single Carriage Way', 'Double Carriage Way', 'Single File Way (One Way)'
    ];

    public roadType = [
        'Avenue', 'Boulevard', 'Close', 'Crescent', 'Drive', 'Lane', 'Railway Line', 'Road', 'Street', 'Walk Way', 'Way'
    ];

    public roadFeature = [
        'Bridges', 'Canal', 'City Gate', 'Highway', 'Intersections', 'Major Roads', 'Pedestrian Bridge', 'Roundabouts', 'T-Junctions', 'Walk Way','None'
    ];

    public electricity = ['Yes', 'No'];


}