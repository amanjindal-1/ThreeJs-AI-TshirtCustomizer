import React from 'react';

import Button from './Button';

export default function FilePicker({ file, setFile, readFile }) {
    return (
        <div className='filepicker-container'>
            <div className='flex flex-col flex-1'>
                <input
                    id='file-upload'
                    type='file'
                    accept='image/*'
                    onChange={e => setFile(e.target.files[0])}
                />
                <label
                    htmlFor='file-upload'
                    className='filepicker-label  focus: outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
                >Upload File</label>

                <p className='mt-2 text-gray-500 text-xs truncate'>
                    {file === '' ? 'No file selected' : file.name}
                </p>
            </div>
            <div className='mt-4 flex flex-wrap gap-3'>
                <Button
                    type='outline'
                    title='Logo'
                    handleClick={() => readFile('logo')}
                    customStyles='text-xs'
                />
                <Button
                    type='filled'
                    title='Full'
                    handleClick={() => readFile('full')}
                    customStyles='text-xs'
                />
            </div>
        </div>
    )
}
