import {
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "./Tab3.scss";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { logoGithub } from "ionicons/icons";

const Tab3: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 3</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 3</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div className="p-4">
					<Card className="min-w-[320px]">
						<CardHeader className="text-center">
							<CardTitle>Tab 3</CardTitle>
							<CardDescription>Tab 3</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-2">
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

export default Tab3;
