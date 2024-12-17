import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export const Preferences: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <Switch id="email-notifications" />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <Switch id="sms-notifications" />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="newsletter">Subscribe to Newsletter</Label>
                    <Switch id="newsletter" />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="recommendations">Personalized Recommendations</Label>
                    <Switch id="recommendations" />
                </div>
            </CardContent>
        </Card>
    )
}