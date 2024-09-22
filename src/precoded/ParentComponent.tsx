import { lazy, Suspense } from "react";
import ApiComponent from "./ApiComponent";
import { EventHandlingComponent } from "./EventHandlingComponent";
import { FormComponent } from "./FormComponent";
import EventDelegation from "./EventDelegation";
import ErrorComponent from "./ErrorComponent";
import ErrorBoundary from "./ErrorBoundary";
import { UncontrolledForm } from "./UncontrolledForm";
import { FormikForm } from "./FormLibraries";

const Child = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        //@ts-expect-error
        resolve(import('./ChildComponent'))
    }, 2000);
}));

export const ParentComponent = () => {
    return (
        <div>
            <h3>Example</h3>x
            <ErrorBoundary>
                <Suspense fallback={<div>Loading data...</div>}>
                    <Child />
                    <ApiComponent />
                </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
                <ErrorComponent />
            </ErrorBoundary>
            <EventHandlingComponent />
            <EventDelegation />
            <FormComponent />
            <UncontrolledForm />
            <FormikForm />
        </div>
    );
}
