export interface Task {
  id: number;
  name: string;        // 🆕 nama tugas
  description: string; // 🆕 deskripsi tugas
  status: boolean;     // true = done, false = pending
}
