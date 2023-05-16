'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="bg-light text-light-secondary dark:bg-dark dark:text-dark-secondary min-h-screen">
            <section className="pt-44">
                <div className="container mx-auto">
                    <div className="text-center select-none">
                        <span className="material-icons text-light-primary dark:text-dark-primary text-9xl relative"
                        >
                            sick
                        </span>
                    </div>
                    <h2 className="text-6xl text-light-secondary dark:text-dark-secondary mb-12 px-4 md:px-0 text-center">Something went wrong!</h2>
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={
                                // Attempt to recover by trying to re-render the segment
                                () => reset()
                            }
                        >
                            Try again
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
