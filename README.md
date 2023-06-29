# Reframed
## Communication between iframes

The code establishes a bidirectional communication layer between two iframes of the same domain. The iframes can be rendered on a seperate domain. Here's how it works:

1. The code selects an input element within an iframe based on a given selector.
1. When a key is released in the input element, an event listener is triggered.
1. The event listener retrieves the number of frames in the parent window.
1. It iterates over each frame and sends the value of the input element to each frame using the postMessage method.
1. The postMessage method sends the input value as the message and the current origin (location.origin) as the target origin to ensure secure communication.
1. The code also listens for incoming messages using an event listener attached to the window object.
1. When a message is received, the event listener function is executed.
1. It first checks if the message originated from a different origin than the current location. If it did, the function returns without further processing to ensure security.
1. The function then checks if the message source is the same as the message target. If they are the same, it means the message was sent from within the same iframe, so the function returns without further processing.
1. If the conditions are met, the value of the received message is assigned to the input element, updating its value in the current iframe.

In summary, the code establishes bidirectional communication between two iframes within the same domain. The input value in one iframe can be sent to the other iframe, and vice versa, allowing seamless communication and synchronization of data between the iframes.
