import { AiOutlineCloseCircle } from 'react-icons/ai'
import React from 'react'

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography
} from '@material-tailwind/react'

// eslint-disable-next-line react/prop-types
export default function Modal ({ title, Icon, iconClassName, description }) {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(cur => !cur)

  return (
    <section className='grid place-items-center mt-4'>
      <Button onClick={handleOpen}>{title}</Button>
      <Dialog className='p-2' open={open} handler={handleOpen}>
        <DialogHeader className='justify-between bg-gray-900'>
          {Icon && <Icon className={`text-4xl ${iconClassName}`} />}
          <AiOutlineCloseCircle
            onClick={handleOpen}
            className='cursor-pointer'
          />
        </DialogHeader>
        <DialogBody className='bg-gray-800 p-4'>
          <Typography color='white' className='mb-1 font-bold'>
            {title}
          </Typography>
          <Typography
            variant='paragraph'
            className='font-normal text-white whitespace-normal h-auto mt-3'
          >
            {description}
          </Typography>
        </DialogBody>
      </Dialog>
    </section>
  )
}
