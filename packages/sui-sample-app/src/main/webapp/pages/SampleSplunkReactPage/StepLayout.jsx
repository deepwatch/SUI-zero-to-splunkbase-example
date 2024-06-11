import React, { useCallback, useState } from 'react';
import Button from '@splunk/react-ui/Button';
import ChevronLeft from '@splunk/react-icons/enterprise/ChevronLeft';
import ChevronRight from '@splunk/react-icons/enterprise/ChevronRight';
import StepBar from '@splunk/react-ui/StepBar';

const numSteps = 4;

const StepLayout = () => {

    const [activeStepId, setActiveStepId] = useState(0);

    const handlePrevious = useCallback(() => {
        setActiveStepId(activeStepId - 1);
    }, [activeStepId]);

    const handleNext = useCallback(() => {
        setActiveStepId(activeStepId + 1);
    }, [activeStepId]);

    return (
        <div>
            <StepBar activeStepId={activeStepId}>
                <StepBar.Step>Select item</StepBar.Step>
                <StepBar.Step>Configure required</StepBar.Step>
                <StepBar.Step>Configure optional</StepBar.Step>
                <StepBar.Step>Review</StepBar.Step>
            </StepBar>
            <br />
            <br />
            <Button
                icon={<ChevronLeft />}
                label="Back"
                appearance="default"
                disabled={activeStepId === 0}
                onClick={handlePrevious}
            />

            <Button
                label={activeStepId < numSteps - 1 ? 'Next' : 'Done'}
                appearance="primary"
                onClick={activeStepId < numSteps - 1 ? handleNext : undefined}
            >
                <ChevronRight />
            </Button>
        </div>
    );

}

export default StepLayout;