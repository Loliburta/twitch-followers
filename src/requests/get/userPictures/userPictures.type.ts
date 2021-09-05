export interface userPicturesType {
    data: userInfo[];
  }
  
  export interface userInfo {
    id: string;
    login: string;
    display_name: string;
    type: string;
    broadcaster_type: string;
    description: string;
    profile_image_url: string;
    offline_image_url: string;
    view_count: number;
    created_at: Date;
  }
  