import { logoGithub } from "ionicons/icons";

import {
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "./Tab1.scss";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

const Tab1: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 1</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 1</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div className="p-4">
					<Card className="min-w-[320px]">
						<CardHeader className="text-center">
							<CardTitle>Tab 1</CardTitle>
							<CardDescription>Tab 1</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-2">
							<Input placeholder="Input field..." />
							<a
								href="https://github.com/godkingjay/ionic-react-shadcn"
								target="_blank"
							>
								<Button className="w-full flex gap-2">
									<IonIcon
										icon={logoGithub}
										className="aspect-square h-[20px] w-[20px]"
									/>
									<span>Github</span>
								</Button>
							</a>
						</CardContent>
					</Card>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
