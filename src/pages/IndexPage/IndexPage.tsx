import { Button, FixedLayout, Placeholder } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
    return (
        <Page back={false}>
            <Placeholder
                header="Collector 3000"
                style={{
                    fontSize: 100
                }}
            >
                💰
            </Placeholder>
            <FixedLayout style={{
                display: "flex",
                padding: 16,
                gap: 16
            }}>
                <Button
                    mode="bezeled"
                    size="l"
                    stretched
                >
                    Check
                </Button>
                <Button
                    mode="bezeled"
                    size="l"
                    stretched
                >
                    Collect
                </Button>
            </FixedLayout>
        </Page>
    );
};
