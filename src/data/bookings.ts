export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no-show'

export interface BookingService {
  serviceId: string
  serviceName: string
  price: number
  duration: number
}

export interface Booking {
  id: string
  clientName: string
  clientPhone: string
  clientEmail?: string
  stylistId: string
  services: BookingService[]
  date: string
  startTime: string
  endTime: string
  totalPrice: number
  totalDuration: number
  status: BookingStatus
  notes?: string
  createdAt: string
  updatedAt: string
}

export const mockBookings: Booking[] = [
  {
    id: 'bkg-001',
    clientName: 'Sara Mekonnen',
    clientPhone: '+251 911 234 101',
    clientEmail: 'sara@example.com',
    stylistId: 'sty-001',
    services: [
      { serviceId: 'svc-005', serviceName: 'Knotless Braids', price: 1800, duration: 300 },
    ],
    date: '2024-11-18',
    startTime: '09:00',
    endTime: '14:00',
    totalPrice: 1800,
    totalDuration: 300,
    status: 'confirmed',
    createdAt: '2024-11-10T08:30:00Z',
    updatedAt: '2024-11-10T08:30:00Z',
  },
  {
    id: 'bkg-002',
    clientName: 'Liya Haile',
    clientPhone: '+251 922 345 102',
    stylistId: 'sty-002',
    services: [
      { serviceId: 'svc-008', serviceName: 'Highlights & Balayage', price: 2000, duration: 180 },
    ],
    date: '2024-11-18',
    startTime: '09:00',
    endTime: '12:00',
    totalPrice: 2000,
    totalDuration: 180,
    status: 'confirmed',
    createdAt: '2024-11-12T10:15:00Z',
    updatedAt: '2024-11-12T10:15:00Z',
  },
  {
    id: 'bkg-003',
    clientName: 'Biruk Tsegay',
    clientPhone: '+251 933 456 103',
    stylistId: 'sty-004',
    services: [
      { serviceId: 'svc-003', serviceName: "Men's Cut & Fade", price: 250, duration: 45 },
    ],
    date: '2024-11-18',
    startTime: '10:00',
    endTime: '10:45',
    totalPrice: 250,
    totalDuration: 45,
    status: 'completed',
    createdAt: '2024-11-15T09:00:00Z',
    updatedAt: '2024-11-18T10:50:00Z',
  },
  {
    id: 'bkg-004',
    clientName: 'Rahel Desta',
    clientPhone: '+251 944 567 104',
    clientEmail: 'rahel@example.com',
    stylistId: 'sty-002',
    services: [
      { serviceId: 'svc-010', serviceName: 'Keratin Treatment', price: 2500, duration: 180 },
    ],
    date: '2024-11-19',
    startTime: '09:00',
    endTime: '12:00',
    totalPrice: 2500,
    totalDuration: 180,
    status: 'confirmed',
    notes: 'First time keratin, hair is medium length',
    createdAt: '2024-11-13T14:00:00Z',
    updatedAt: '2024-11-13T14:00:00Z',
  },
  {
    id: 'bkg-005',
    clientName: 'Hana Girma',
    clientPhone: '+251 955 678 105',
    stylistId: 'sty-001',
    services: [
      { serviceId: 'svc-004', serviceName: 'Box Braids', price: 1200, duration: 240 },
    ],
    date: '2024-11-19',
    startTime: '09:00',
    endTime: '13:00',
    totalPrice: 1200,
    totalDuration: 240,
    status: 'confirmed',
    createdAt: '2024-11-14T11:30:00Z',
    updatedAt: '2024-11-14T11:30:00Z',
  },
  {
    id: 'bkg-006',
    clientName: 'Marta Kebede',
    clientPhone: '+251 966 789 106',
    stylistId: 'sty-003',
    services: [
      { serviceId: 'svc-013', serviceName: "Kids' Cut", price: 200, duration: 30 },
    ],
    date: '2024-11-19',
    startTime: '15:00',
    endTime: '15:30',
    totalPrice: 200,
    totalDuration: 30,
    status: 'pending',
    createdAt: '2024-11-15T16:00:00Z',
    updatedAt: '2024-11-15T16:00:00Z',
  },
  {
    id: 'bkg-007',
    clientName: 'Frehiwot Alemu',
    clientPhone: '+251 977 890 107',
    clientEmail: 'frehiwot@example.com',
    stylistId: 'sty-002',
    services: [
      { serviceId: 'svc-011', serviceName: 'Bridal Hair Styling', price: 3500, duration: 240 },
    ],
    date: '2024-11-22',
    startTime: '07:00',
    endTime: '11:00',
    totalPrice: 3500,
    totalDuration: 240,
    status: 'confirmed',
    notes: 'Wedding day — arrives with family',
    createdAt: '2024-10-01T09:00:00Z',
    updatedAt: '2024-11-01T09:00:00Z',
  },
  {
    id: 'bkg-008',
    clientName: 'Tsion Worku',
    clientPhone: '+251 988 901 108',
    stylistId: 'sty-005',
    services: [
      { serviceId: 'svc-002', serviceName: 'Cut, Wash & Blow-Dry', price: 500, duration: 90 },
    ],
    date: '2024-11-20',
    startTime: '11:00',
    endTime: '12:30',
    totalPrice: 500,
    totalDuration: 90,
    status: 'confirmed',
    createdAt: '2024-11-16T10:00:00Z',
    updatedAt: '2024-11-16T10:00:00Z',
  },
  {
    id: 'bkg-009',
    clientName: 'Dawit Tesfaye',
    clientPhone: '+251 911 012 109',
    stylistId: 'sty-004',
    services: [
      { serviceId: 'svc-003', serviceName: "Men's Cut & Fade", price: 250, duration: 45 },
      { serviceId: 'svc-009', serviceName: 'Deep Conditioning', price: 450, duration: 60 },
    ],
    date: '2024-11-20',
    startTime: '14:00',
    endTime: '15:45',
    totalPrice: 700,
    totalDuration: 105,
    status: 'confirmed',
    createdAt: '2024-11-17T08:30:00Z',
    updatedAt: '2024-11-17T08:30:00Z',
  },
  {
    id: 'bkg-010',
    clientName: 'Yeshi Alemu',
    clientPhone: '+251 922 123 110',
    stylistId: 'sty-001',
    services: [
      { serviceId: 'svc-006', serviceName: 'Locs & Twists', price: 800, duration: 180 },
    ],
    date: '2024-11-21',
    startTime: '10:00',
    endTime: '13:00',
    totalPrice: 800,
    totalDuration: 180,
    status: 'cancelled',
    notes: 'Client cancelled due to illness',
    createdAt: '2024-11-13T12:00:00Z',
    updatedAt: '2024-11-19T09:00:00Z',
  },
]

export default mockBookings
