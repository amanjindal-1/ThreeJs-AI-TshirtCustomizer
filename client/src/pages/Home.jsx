import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { Button } from '../components';
//for animation
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='xl: justify-center home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src='./threejs.png'
                            alt='logo'
                            className='w-8 h-8 object-contain'
                        />
                    </motion.header>
                    <motion.div className='xl: justify-center home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='xl: text-[10rem] xl:leading-[11rem] head-text'>LET'S <br className='xl:block hidden' /> DO IT.</h1>
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            className='flex flex-col gap-5'
                        >
                            <p className='max-w-md font-normal text-gray-600 text-base'>Create your unique and exclusive shirt with help of our new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
                            </p>

                            <Button
                                type='filled'
                                title='Customize It'
                                handleClick={() => state.intro = false}
                                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home