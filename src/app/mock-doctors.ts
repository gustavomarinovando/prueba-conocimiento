import { Doctor } from './Doctor';

export const DOCTORS: Doctor[] = [
	{
		id: 1,
		nombre: 'John Doe',
		direccion: 'Avenida Cuarta 522',
		telefono: '72753555',
		fijo: '4245625',
		especialidad: ['Pediatria', 'Cardiologia'],
		turno: ['Mañana', 'Tarde']
	},
	{
		id: 2,
		nombre: 'Jane Doe',
		direccion: 'Avenida Juan Pablo II 842',
		telefono: '75526458',
		especialidad: ['Neumologia', 'Pediatria'],
		turno: ['Mañana', 'Tarde']
	},
	{
		id: 3,
		nombre: 'Joe Doakes',
		direccion: 'Avenida Segunda 1552',
		telefono: '70752023',
		fijo: '44352186',
		especialidad: ['Psicologia', 'Psiquiatria'],
		turno: ['Mañana', 'Tarde']
	},
];