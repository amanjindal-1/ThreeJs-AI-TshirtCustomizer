import Button from './Button';

export default function AIPicker({ prompt, setPrompt, generatingImg, handleSubmit }) {
    return (
        <div className='aipicker-container'>
            <textarea
                className='aipicker-textarea'
                placeholder='Ask AI...'
                rows={5}
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
            />
            <div className='flex flex-wrap gap-3'>
                {generatingImg ? (
                    <Button
                        type='outline'
                        title='Asking AI...'
                        customStyles='text-xs'
                    />
                ) : (
                    <>
                        <Button
                            type='outline'
                            title='AI Logo'
                            handleClick={() => handleSubmit('logo')}
                            customStyles='text-xs'
                        />
                        <Button
                            type='filled'
                            title='AI Full'
                            handleClick={() => handleSubmit('full')}
                            customStyles='text-xs'
                        />
                    </>
                )}
            </div>
        </div>
    )
}
