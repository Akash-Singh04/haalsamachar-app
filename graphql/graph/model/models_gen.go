// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type BlogCreateRequest struct {
	UserID            string `json:"UserID"`
	Title             string `json:"Title"`
	Content           string `json:"Content"`
	Subtitle          string `json:"Subtitle"`
	Image             string `json:"Image"`
	SpotifyLink       string `json:"SpotifyLink"`
	UploadedImageLink string `json:"UploadedImageLink"`
}

type BlogPost struct {
	ID                string `json:"ID"`
	UserID            string `json:"UserID"`
	Title             string `json:"Title"`
	Content           string `json:"Content"`
	CreatedAt         string `json:"CreatedAt"`
	Subtitle          string `json:"Subtitle"`
	Image             string `json:"Image"`
	SpotifyLink       string `json:"SpotifyLink"`
	UploadedImageLink string `json:"UploadedImageLink"`
}

type BlogUpdateRequest struct {
	UserID            string `json:"UserID"`
	BlogID            string `json:"BlogID"`
	Title             string `json:"Title"`
	Content           string `json:"Content"`
	Subtitle          string `json:"Subtitle"`
	Image             string `json:"Image"`
	SpotifyLink       string `json:"SpotifyLink"`
	UploadedImageLink string `json:"UploadedImageLink"`
}

type Comment struct {
	ID        string `json:"ID"`
	UserID    string `json:"UserID"`
	BlogID    string `json:"BlogID"`
	Content   string `json:"Content"`
	CreatedAt string `json:"CreatedAt"`
}

type CommentCreateRequest struct {
	UserID  string `json:"UserID"`
	BlogID  string `json:"BlogID"`
	Content string `json:"Content"`
}

type CommentUpdateRequest struct {
	BlogID    string `json:"BlogId"`
	CommentID string `json:"CommentID"`
	Content   string `json:"Content"`
}

type LoginRequest struct {
	Username string `json:"Username"`
	Password string `json:"Password"`
}

type LoginResponse struct {
	Token string `json:"Token"`
}

type Mutation struct {
}

type Query struct {
}

type User struct {
	ID       string `json:"ID"`
	Username string `json:"Username"`
	Email    string `json:"Email"`
	Password string `json:"Password"`
}
