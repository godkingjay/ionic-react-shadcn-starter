import {
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "./Tab2.scss";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { logoGithub } from "ionicons/icons";

const Tab2: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 2</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 2</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div className="p-4">
					<Card className="min-w-[320px]">
						<CardHeader className="text-center">
							<CardTitle>Tab 2</CardTitle>
							<CardDescription>Tab 2</CardDescription>
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

export default Tab2;
