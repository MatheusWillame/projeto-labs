import { h, Component, State, Host } from '@stencil/core';

@Component({
	tag: 'app-todo',
	styleUrl: 'todo.scss',
	shadow: true
})

export class TodoComponent{

	@State() tasks: string[] = []
	@State() task: string = ''

	handleSubmit = (ev: Event) => { 
		ev.preventDefault()

		if(this.task.trim()){
      this.tasks.push(this.task);
			this.task = '';
		}
	}
	
	handleInput = (ev: Event) => {
		const field = ev.target as HTMLInputElement; 
		this.task = field.value;
	}

	handleDelete = (id: Number) => {
		let filtroTasks = this.tasks.filter((item,i)=>{
			console.log(item)
			return (id !== i) 
		});
		this.tasks = filtroTasks;
	}

	componentWillLoad(){
		const startInit =  () => {
			this.tasks.push("Marcar reunião com André às 14h00",
											"Tirar dúvida com Jonathan",
											"Solicitar CodeReview ao Marcos");
		}
		startInit();
	}

	render(){
		return(
			<Host>
				<h1>TodoList / Sankhya</h1>
				<form class="register" onSubmit={this.handleSubmit}>
					<input class="register__field" onInput={this.handleInput} value={this.task}></input>
					<button class="register__btn">Adicionar</button>
				</form>
				<ul class="list"> 
					{this.tasks.map((t, i) => 
						<div class="list__container">
							<li class="list__item" key={i}>{t}</li> 
							<button class="list__btn" onClick={() => this.handleDelete(i)}>Concluir</button>
						</div>
					)}
				</ul>
			</Host>
		);
	}

}