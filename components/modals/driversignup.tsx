import React from 'react'
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react'

export default function DriverSignup() {
    const [visible, setVisible] = React.useState(false)
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [confirmPassword, setConfirmPassword] = React.useState<string>('')

    const handler = () => setVisible(true)

    const SubmitHandler = () => {
        console.log(email, password, confirmPassword)
        closeHandler()
    }
    const closeHandler = () => {
        setVisible(false)
        console.log('closed')
    }

    return (
        <div>
            <Button auto shadow color="warning" onPress={handler}>
                Driver
            </Button>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Signup as a{' '}
                        <Text b size={18}>
                            Driver
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Row justify="space-between"></Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Close
                    </Button>
                    <Button auto onPress={SubmitHandler}>
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
