export interface DeviceSchema {
    id?: number;
    name: string;
    type: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}