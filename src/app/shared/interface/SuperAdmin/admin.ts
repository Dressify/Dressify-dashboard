export interface admin {
    adminId: string;
    adminName: string;
    email: string;
    profilePic: string;
}

export interface getAdmins{
    count: number;
    admins: admin[]
}