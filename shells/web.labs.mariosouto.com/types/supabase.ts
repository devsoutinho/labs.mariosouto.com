export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      course: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
          platform: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
          platform?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
          platform?: string | null
        }
      }
      course_student: {
        Row: {
          course_id: number | null
          created_at: string | null
          id: number
          person_id: number | null
        }
        Insert: {
          course_id?: number | null
          created_at?: string | null
          id?: number
          person_id?: number | null
        }
        Update: {
          course_id?: number | null
          created_at?: string | null
          id?: number
          person_id?: number | null
        }
      }
      person: {
        Row: {
          created_at: string | null
          email: string
          github_user: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          email: string
          github_user?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          email?: string
          github_user?: string | null
          id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
