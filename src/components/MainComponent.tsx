import { lazy } from "react";

const LazyLoadedChild = lazy(() => import('./Child'))

export const MainComponent = () => {
    return (
        <div>
            <h1>React Basics - Part 2</h1>

                <LazyLoadedChild />
        </div>
    );
}
