'use client'
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface IFormInput {
    _id: string;
    name: string;
    email: string;
    comment: string;
}

interface Props {
    post: Post;
}

function CommentsForm({ post }: Props) {
    const [submitted, setSubmitted] = useState(false); 
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>(); 

    // const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    //     try {
    //         await axios.post('/api/createComment', data);
    //         console.log('Comment submitted successfully:', data);
    //         setSubmitted(true);
    //     } catch (error) {
    //         console.error('Error submitting comment:', error);
    //         setSubmitted(false);
    //     }
    
    // }

    return (
        <div>
            <hr className="maz-w-lg my-5 mx-auto border border-yellow-500"/>
            {submitted ? (
            <div className="flex flex-col p-10 my-10 bg-[#f5c15d] max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold">Thank you for submitting your comment!</h3>
                <div className="flex justify-center">
                    <p className="">Once it has been  approved, it will appear below!</p>
                </div>
            </div>
            ) : (
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
            <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
            <h4 className="text-3xl font-bold">Leave a comment below!</h4>
            <hr className="py-3 mt-2" />


            <input 
                type="hidden"
                value={post._id}
                {...register("_id")}
            />

            <label  className="block mb-5">
                <span className="text-gray-700">Name:</span>
                <input 
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="name"
                    className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring ring-0"
                />
            </label>
            <label  className="block mb-5">
                <span className="text-gray-700">Email:</span>
                <input 
                    type="text"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring ring-0"
                />
            </label>
            <label  className="block mb-5">
                <span className="text-gray-700">Comment:</span>
                <textarea 
                    placeholder="Leave a comment!"
                    rows={8}
                    {...register("comment", { required: true })}
                    className="shadow border rounded py-2 px-3 mt-1 block w-full ring-yellow-500 outline-none focus:ring ring-0"
                />
            </label>
            
            <div className="flex flex-col p-5">
                {errors.name && (
                    <span className="text-red-500">Name is required.</span>
                )}
                {errors.comment && (
                    <span className="text-red-500">Comment is required.</span>
                )}
                {errors.email && (
                    <span className="text-red-500">Email is required.</span>
                
                )}
            </div>

            <input 
                type="submit"
                className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            />
            </form>
             )}

             {/* Comments */}
             {/* <div className='flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y-2'>
                <h3 className="text-4xl">Comment</h3>
                <hr className="pb-2"/>
             </div> */}
        </div>
    );
}

export default CommentsForm;
