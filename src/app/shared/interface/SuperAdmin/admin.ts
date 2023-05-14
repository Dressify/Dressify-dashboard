export interface admins {
    adminId: string;
    adminName: string;
    email: string;
    profilePic: string;
}

export interface getAdmins{
    count: number;
    admins: admins[]
}