import React from "react";

export default function footer() {
  return (
    <div className="mt-4 flex overflow-content">
      <footer className="fixed bottom-0">
        <div className="flex content-center">
          <span className="block lg:text-xl text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
