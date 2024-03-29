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
      businesses: {
        Row: {
          business_description: string | null
          business_name: string
          business_owner: string | null
          created_at: string | null
          id: string
          logo_url: string | null
          reward_name: string | null
          stamps_needed: number
        }
        Insert: {
          business_description?: string | null
          business_name?: string | null
          business_owner?: string | null
          created_at?: string | null
          id?: string
          logo_url?: string | null
          reward_name?: string | null
          stamps_needed?: number
        }
        Update: {
          business_description?: string | null
          business_name?: string | null
          business_owner?: string | null
          created_at?: string | null
          id?: string
          logo_url?: string | null
          reward_name?: string | null
          stamps_needed?: number
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          business_id: string | null
          business_owner: boolean
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          business_id?: string | null
          business_owner?: boolean
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          business_id?: string | null
          business_owner?: boolean
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
      }
      profiles_businesses: {
        Row: {
          business_id: string
          created_at: string
          stamps: number
          user_id: string
        }
        Insert: {
          business_id: string
          created_at?: string | null
          stamps?: number | null
          user_id: string
        }
        Update: {
          business_id?: string
          created_at?: string | null
          stamps?: number | null
          user_id?: string
        }
      }
      purchases: {
        Row: {
          business_id: string | null
          created_at: string | null
          id: number
          profile_id: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string | null
          id?: number
          profile_id?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string | null
          id?: number
          profile_id?: string | null
        }
      }
      waitlist: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      stamp: {
        Args: {
          cust_id: string
          biz_id: string
          increment_num: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
