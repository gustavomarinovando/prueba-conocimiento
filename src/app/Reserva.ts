export interface Doctor {
		id?: number;
		nombre: string;
		direccion: string;
		telefono: string;
		fijo?: string;
		especialidad: string[];
		turno: string[]
}