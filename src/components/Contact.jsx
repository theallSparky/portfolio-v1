import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#0015be]'>Contact</h1>
        <form action="" method='POST' encType='multipart/form-data'>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" name='name' />
                </div>
                <div>
                    <label>Number</label>
                    <input type="text" name='phone' />
                </div>
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Subject</label>
                <input type="text" name="subject" />
            </div>
            <div>
                <label>Message</label>
                <textarea rows="10" name="message"></textarea>
            </div>
        </form>
    </div>
  )
}

export default Contact