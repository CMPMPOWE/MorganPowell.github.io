import React from 'react';

const BentoBoxProjects: React.FC = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base font-semibold text-indigo-600 dark:text-indigo-400">Showcase</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-medium tracking-tight text-gray-950 dark:text-gray-100 sm:text-5xl">
                    My Projects.
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    {/* Project 1 */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800 lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center">
                                    Mobile friendly
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-gray-600 dark:text-gray-400 max-lg:text-center">
                                  test
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 dark:border-gray-500 bg-gray-900 dark:bg-gray-800 shadow-2xl">
                                    <img
                                        className="size-full object-cover object-top"
                                        src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                                        alt="Mobile Friendly"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 lg:rounded-l-[2rem]"></div>
                    </div>

                    {/* Project 2 */}
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800 max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center">
                                    Performance
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-gray-600 dark:text-gray-400 max-lg:text-center">
                                 test-project2
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <img
                                    className="w-full max-lg:max-w-xs"
                                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                    alt="Performance"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 max-lg:rounded-t-[2rem]"></div>
                    </div>

                    {/* Project 3 */}
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center">
                                    Security
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-gray-600 dark:text-gray-400 max-lg:text-center">
                                project-test3
                                </p>
                            </div>
                            <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                <img
                                    className="h-[min(152px,40cqw)] object-cover object-center"
                                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                    alt="Security"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10"></div>
                    </div>

                    {/* Project 4 */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center">
                                    Powerful APIs
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-gray-600 dark:text-gray-400 max-lg:text-center">
                                  testing enviroment
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 dark:bg-gray-800 shadow-2xl">
                                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400 dark:text-gray-300">
                                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                NotificationSetting.jsx
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-14 pt-6">{"asdasd"}</div>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BentoBoxProjects;
