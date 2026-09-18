export type StudentInstitution = "LatisEducation" | "TutorIndonesia";

export interface Student {
    id?: number;
    name: string;
    email: string;
    number: string;
    institution: StudentInstitution;
    photo?: string;
    photo_url?: string;
}
