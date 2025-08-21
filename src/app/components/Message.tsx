import React from 'react';

type MessageProps = {
    text: string;
    isUser?: boolean;
};

const Message: React.FC<MessageProps> = ({ text, isUser = false }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: isUser ? 'flex-end' : 'flex-start',
                marginBottom: '8px',
            }}
        >
            <div
                style={{
                    maxWidth: '70%',
                    padding: '12px 16px',
                    borderRadius: '18px',
                    background: isUser ? '#0078fe' : '#f1f0f0',
                    color: isUser ? '#fff' : '#333',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                }}
            >
                {text}
            </div>
        </div>
    );
};

export default Message;