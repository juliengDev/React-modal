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

- `isOpen` (`boolean`): Controls whether the modal is open or closed.
- `setIsOpen` (`function`): Function to toggle the `isOpen` state.
- `mainTitle` (`string`): Title text displayed in the modal header.
- `text` (`string`): Text content displayed in the modal body.
- `icon` (`string`, optional): Optional icon displayed alongside the `mainTitle`.
- `mainStyle` (`object`, optional): CSS styles for the main title.
- `textStyle` (`object`, optional): CSS styles for the text content.

These props allow you to customize the appearance and behavior of the `Modal` component within your React application.

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
