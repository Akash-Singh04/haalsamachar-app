'use client'
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { ToastContainer, toast } from "react-toastify";
import { setDoc ,  doc } from "firebase/firestore";
import { db } from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
const commentsAPI = process.env.NEXT_PUBLIC_COMMENTS_API_URL;

const CommentForm = ({
  blogId,
  userId,
}: {
  blogId: Number;
  userId: Number;
}) => {
  const router = useRouter();
  const handleSubmit = async (e : any ) => {
    e.preventDefault();
    const content = e.target.content.value;
    const comment = {
      userId: Number(blogId),
      blogId: Number(userId),
      content: content,
    }; //done on purpose because the API has typo 
    const response = await fetch(`${commentsAPI}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );
    if (!response.ok) {
      toast.error("Failed to add comment");
      return;
    }
    toast.success("Comment added successfully");
    const data = await response.json();
    try{
      const likes = {
        id: data.id,
        likes: 0,
      };
      const likesDoc = await setDoc(doc(db, "likes", data.id.toString() ), likes);
      // toast.success("Likes document created successfully");
      console.log("Likes document created successfully");
      router.refresh();
    } catch (error) {
      console.error("Error creating likes document:", error);
      toast.error("Error creating likes document");
    }
  };

  return (
    <div>
      <ToastContainer />
      <form className="space-y-4" onSubmit={handleSubmit}>
      <SimpleMDE
        id="content"
        className="w-full border border-bt-teal bg-bt-peach text-bt-navy rounded-md px-4 py-2"
      />
      <button
        type="submit"
        className="bg-bt-navy my-4 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add Comment
      </button>
    </form>
    </div>
  );
};

export default CommentForm;
