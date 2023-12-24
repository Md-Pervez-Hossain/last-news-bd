"use client"
import { useForm } from 'react-hook-form';
import { PrimaryButton } from '../Share/Buttons/Buttons';
import Title from '../ui/Title/Title';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({

  });
  const handleContact = (values) => {
    console.log(values);
  };
  return (
    <div  >
      <Title>Get in Touch</Title>
      <form onSubmit={handleSubmit(handleContact)}>
        <div className='my-5'>
          <div className='flex flex-col mb-3'>
            <label className='text-[18px] font-[500] mb-3'>Your Name</label>
            <input  {...register("name", { required: true })} placeholder='Enter Your Name' className='border border-[#CED4DA] px-4 py-3 rounded focus:outline-none' />
            {
              errors.name && <p className='text-[#40282C]'>This Field is Required</p>
            }
          </div>
          <div className='flex flex-col mb-3'>
            <label className='text-[18px] font-[500] mb-3'>Subject</label>
            <input  {...register("subject", { required: true })} placeholder='Enter Subject' className='border border-[#CED4DA] px-4 py-3 rounded focus:outline-none' />
            {
              errors.subject && <p className='text-[#40282C]'>This Field is Required</p>
            }
          </div>
          <div className='flex flex-col mb-3'>
            <label className='text-[18px] font-[500] mb-3'>Phone Number</label>
            <input  {...register("phone_number", { required: true })} placeholder='Enter Phone Number' className='border border-[#CED4DA] px-4 py-3 rounded focus:outline-none' />
            {
              errors.phone_number && <p className='text-[#40282C]'>This Field is Required</p>
            }
          </div>

          <div className='flex flex-col mb-3'>
            <label className='text-[18px] font-[500] mb-3'>Email</label>
            <input  {...register("email", { required: true })} placeholder='Enter Subject' type='email' className='border border-[#CED4DA] px-4 py-3 rounded focus:outline-none' />
            {
              errors.email && <p className='text-[#40282C]'>This Field is Required</p>
            }
          </div>
        </div>
        <div className='flex flex-col my-5'>
          <label className='text-[18px] font-[500] mb-3'>Message</label>
          <textarea  {...register("message", { required: true })} placeholder='Type Your Message' type='text' className='border border-[#CED4DA] px-4 py-3 rounded focus:outline-none' />
          {
            errors.message && <p className='text-[#40282C]'>This Field is Required</p>
          }
        </div>
        <PrimaryButton className="rounded-lg px-4 bg-secondary">Submit Message</PrimaryButton>
      </form>
    </div>
  );
};

export default ContactForm;
