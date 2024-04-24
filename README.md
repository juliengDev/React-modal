# React Modal Component

This component provides a customizable modal interface that can be easily integrated into your React applications. You can control its visibility and appearance using props.

## Installation

You can install this component via npm:

```bash
npm install juliengilbertdev-modal
```

### Styling

Variable icon font
Add the variable font stylesheet request to your head tag and the current variable axes configuration to icons using CSS.

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
```

## Import the Counter component

```js
import { Modal } from "juliengilbertdev-modal";
```

## Props

The `Modal` component accepts the following props:

- `isOpen` (`boolean`, required): Controls whether the modal is open or closed.
- `setIsOpen` (`React.Dispatch<React.SetStateAction<boolean>>`, required): A function to toggle the `isOpen` state.
- `icon` (`string`, optional): Icon to display alongside the main title.
- `titleStyle` (`string`, optional): Additional CSS class to apply to the modal title for custom styling.
- `mainTitle` (`string`, optional): The main title text displayed in the modal.
- `text` (`string`, optional): Additional text content displayed in the modal.

## Usage

Here's how you can use the `Modal` component in your React application:

```jsx
import React, { useState } from "react";
import Modal from "juliengilbertdev-modal";
import "juliengilbertdev-modal/dist/modal.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        icon="🎉"
        titleStyle="custom-title"
        mainTitle="Welcome!"
        text="This is a custom modal component."
      />
    </div>
  );
}

export default App;
```

Have fun 🙂
