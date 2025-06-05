package java;

public class Aluno extends User {
	
	public String email;
	public int idade;
	public int faltas;
	public float peso;
	public float altura;
	public Treino treino;

	public Aluno(String nome, String senha, int matricula) {
		super(nome, senha, matricula);
	}
	
	public String infoAluno() {
		String out = "Nome: "+ nome+ "\n"+
				"Idade: "+ idade+ "\n"+
				"Email: "+ email+ "\n"+
				"Faltas: "+ faltas+ "\n"+
				"Altura: "+ altura+ "\n"+
				"Peso: "+ peso+ "\n";
		
		return out;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getIdade() {
		return idade;
	}

	public void setIdade(int idade) {
		this.idade = idade;
	}

	public float getPeso() {
		return peso;
	}

	public void setPeso(float peso) {
		this.peso = peso;
	}

	public float getAltura() {
		return altura;
	}

	public void setAltura(float altura) {
		this.altura = altura;
	}
	
	public Treino getTreino() {
		return treino;
	}

}
