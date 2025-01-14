import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogProps } from '../src';

const meta: Meta<DialogProps> = {
  component: Dialog,
  title: 'Components/Dialog',
};

export default meta;

export const Default: Story<DialogProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = React.useCallback(() => void setIsOpen(false), []);
  const handleOpen = React.useCallback(() => void setIsOpen(true), []);

  return (
    <>
      <Button onPress={handleOpen}>Open Dialog</Button>
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <DialogHeader>Dialog Title</DialogHeader>
        <DialogContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </DialogContent>
        <DialogFooter>
          <Button variant="secondary" onPress={handleClose}>
            Close
          </Button>
          <Button onPress={handleClose}>Confirm</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
