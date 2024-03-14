import { Link, Head } from '@inertiajs/react';
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavBarGuest from '@/Components/NavBarGuest';
import NavBarAuthed from '@/Components/NavBarAuthed';
import Footer from '@/Components/Footer';

// Functionality for downloading Excel file
const handleDownloadExcel = (content) => {
  // Implement functionality to generate and download Excel file
  console.log("Downloading Excel for:", content);
};

// Functionality for opening a new page
const handleOpenPage = (content) => {
  // Implement functionality to open a new page
  console.log("Opening new page for:", content);
};

const Section = ({ title, contents }) => {
  return (
    <div className="max-w-xl mx-auto mb-8"> {/* Centered container with maximum width */}
      <div>
        <h2>{title}</h2>
        {contents.map((content, index) => (
          <div key={index} className="flex justify-between items-start mb-2"> {/* Flex container for content and buttons */}
            <div className="flex-grow ml-4"> {/* Flex container for content with left margin */}
              <p>{content.content}</p>
            </div>
            <div className="flex"> {/* Flex container for buttons */}
              {content.buttons.map((button, buttonIndex) => (
                <button 
                  key={buttonIndex}
                  className="px-4 py-2 bg-gray-300 rounded border border-gray-500 hover:bg-gray-400 focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                  onClick={() => button.function(content.content)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const categories = [
    {
      title: "Category 1",
      contents: [
        {
          content: "Content 1",
          buttons: [
            {
              label: "Download Excel",
              function: handleDownloadExcel
            },
            {
              label: "Open Page",
              function: handleOpenPage
            }
          ]
        },
        {
          content: "Content 2",
          buttons: [
            {
              label: "Custom Button",
              function: (content) => {
                // Custom functionality for this button
                console.log("Custom button clicked for:", content);
              }
            }
          ]
        }
      ]
    },
    // Include additional categories with their respective content and buttons
  ];

  return (
    <div className="min-h-screen bg-black text-red-500 p-4">
      <Head title="Home" />
      <NavBarGuest />
      {/*
      <NavBarAuthed /> */}
      <div className="mt-8">
        {categories.map((category, index) => (
          <Section 
            key={index} 
            title={category.title} 
            contents={category.contents} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
