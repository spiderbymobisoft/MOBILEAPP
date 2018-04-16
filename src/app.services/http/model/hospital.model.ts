export interface Hospital
{
    paperWork: string;
    type_of_owner: string;
    facility_type: string;
    facilities: [string];
    services: [string];
    partnership_programs: [string];
    patients_per_month: number;
    number_of_doctors: number;
    number_of_nurses: number;
    number_of_pharmacists: number;
    number_of_paramedics: number;
    number_of_bedspace: number;
    number_of_buildings: number;
}