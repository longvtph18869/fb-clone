// import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
import { Dialog } from 'primereact/dialog';
import React from 'react'

type DialogProps = {
    title?: string
    open: boolean
    width?: {
        maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
        fullWidth?: boolean
        fullScreen?: boolean
    }
    style?: any
    className?: any
    children: React.ReactNode
    onClose: (data?: any) => void
}

export default function AppDialog(props: DialogProps) {
    const { open, className, children, onClose, title, style } = props

    const handleClickClose = () => {
        onClose(false)
    }

    return (
        <>
            <Dialog draggable={false} header={title} className={className} style={style} visible={open} onHide={() => handleClickClose()}>
                {children}
            </Dialog>
        </>
    )
}
